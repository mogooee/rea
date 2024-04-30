import { getTrendingReviews } from '@/apis/reviewApis'
import ReviewCard from '@/components/home/ReviewCard'
import { popularLocations } from '@/constants'
import { Colors } from '@/styles/colors'
import { fontStyles } from '@/styles/font'
import { QueryKeys } from '@/utils/queryUtil'
import { Center, Divider, Flex, Text, VStack } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import Head from 'next/head'
import Link from 'next/link'
import type { PropsWithChildren } from 'react'

function SectionContainer({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <VStack bg={Colors.white} as="section" px={4} py={6} gap={6} width="100%" align="start">
      <Text {...fontStyles.TitleLg}>{title}</Text>
      {children}
    </VStack>
  )
}

export default function Home() {
  const { data } = useQuery({
    queryKey: [QueryKeys.getTrendingReviews],
    queryFn: getTrendingReviews,
  })

  return (
    <>
      <Head>
        <title>별별부동산</title>
        <meta name="title" content="별별부동산 | 솔직하고 간편한 공인중개사 리뷰 서비스" />
        <meta
          name="description"
          content="이제 별별부동산에서 리뷰 검색하고, 안전하게 거래하세요!"
        />
        <meta property="og:title" content="별별부동산 | 솔직하고 간편한 공인중개사 리뷰 서비스" />
        <meta property="og:url" content="https://develop.starstaragent.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:image:alt" content="starstaragent logo" />
        <meta
          property="og:description"
          content="이제 별별부동산에서 리뷰 검색하고, 안전하게 거래하세요!"
        />
        <meta property="og:site_name" content="별별부동산" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack as="main" bg={Colors.gray[100]} gap={2}>
        <SectionContainer title="인기 지역">
          <Flex flexWrap="wrap" gap={2}>
            {popularLocations.map(({ address_point, name }) => {
              const { lat, lon } = address_point

              return (
                <Center
                  key={`${lat}-${lon}`}
                  as={Link}
                  bgColor={Colors.gray[100]}
                  px={4}
                  borderRadius={8}
                  href={`/real-estates?lat=${lat}&lon=${lon}`}
                  height="48px"
                >
                  <Text {...fontStyles.BodyMd} color={Colors.gray[600]}>
                    {name}
                  </Text>
                </Center>
              )
            })}
          </Flex>
        </SectionContainer>
        <SectionContainer title="실시간 리뷰">
          <VStack width="100%" divider={<Divider />} gap={4}>
            {data?.results.map((review) => <ReviewCard key={review.id} review={review} />)}
          </VStack>
        </SectionContainer>
      </VStack>
    </>
  )
}
