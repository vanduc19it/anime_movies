import React from 'react'
import Card from '../Card/Card'
import GenreCard from '../GenreCard/GenreCard'
import MostViewedCard from '../MostViewedCard/MostViewedCard'
import TrendingPosts from '../TredingPosts/TrendingPosts'
import { M } from './maincontainer.style'
import { useLatestEpisode } from '../../hooks/useAnime'

const MainContainer = () => {
  const { data, isFetched } = useLatestEpisode()
  return (
    <M.MainWrapper>
      <M.Main>
        <M.Heading style={{ fontSize: "22px" }}>Latest Episode</M.Heading>
        <M.MovieList>
          {isFetched && data.map((item, idx) => <Card key={idx} data={item} />)}
        </M.MovieList>
      </M.Main>
      <M.Aside>
        <M.Heading style={{ fontSize: "22px" }}>Genres</M.Heading>
        <GenreCard />
        <M.Heading style={{ fontSize: "22px" }}>Most Viewed</M.Heading>
        <MostViewedCard />
        <M.Heading style={{ fontSize: "22px" }}>Trending Posts</M.Heading>
        <TrendingPosts />
      </M.Aside>
    </M.MainWrapper>
  )
}

export default MainContainer
