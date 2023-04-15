import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { M } from './main.style'
import logo from '../assets/images/logo.png'
import zoro from '../assets/images/zoro.png'
import zorosmall from '../assets/images/zoro-small.jpeg'
import { FaSearch, FaBars, FaArrowCircleRight, FaComment } from 'react-icons/fa'
import ShareButton from '../components/ShareButton'
import { useAiring, usePopular } from '../hooks/useAnime'

const anime = [
  'Chainsaw Man',
  'One Piece',
  'Bleach: Thousand-Year Blood War Arc',
  'Naruto: Shippuden',
  'Blue Lock',
  'Bleach',
  'The Eminence in Shadow',
  'My Hero Academia Season 6',
  'Boruto: Naruto Next Generations',
  'Naruto',
]

const Main = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { data } = useAiring()

  const clickHandler = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <M.Nav>
        <M.Ul isOpen={isOpen}>
          <M.Li>
            <Link to="/home" onClick={clickHandler}>
              Home
            </Link>
          </M.Li>
          <M.Li>
            <Link to="/movies" onClick={clickHandler}>
              Movies
            </Link>
          </M.Li>
          <M.Li>
            <Link to="/tv-series" onClick={clickHandler}>
              Tv Series
            </Link>
          </M.Li>
          <M.Li>
            <Link to="/most-popular" onClick={clickHandler}>
              Most Popular
            </Link>
          </M.Li>
          <M.Li>
            <Link to="/top-airing" onClick={clickHandler}>
              Top Airing
            </Link>
          </M.Li>
        </M.Ul>
        <M.MenuOpen isOpen={isOpen} onClick={clickHandler}>
          <FaBars />
          <p>Menu</p>
        </M.MenuOpen>
      </M.Nav>
      <M.Banner>
        <M.Left>
          <M.Logo src={logo} />
          <M.Wrapper>
            <M.Input placeholder="Search anime..." />
            <div>
              <M.Button>
                <FaSearch />
              </M.Button>
            </div>
          </M.Wrapper>

          <M.textBox>
            <M.span style={{ fontSize: "14px" }}>Top Search:</M.span>
            {data?.data.slice(0, 10).map((item, idx) => (
              <M.Text key={idx} style={{ fontSize: "14px" }}>
                {item.title_english === null ? item.title : item.title_english},
              </M.Text>
            ))}
          </M.textBox>
        </M.Left>
        <M.Right>
          <M.iconWrapper>
            <M.Icon src={zoro} alt="img" />
          </M.iconWrapper>
        </M.Right>
      </M.Banner>
      <M.Container>
        <M.Action to="/home">
          View Full Site <FaArrowCircleRight />
        </M.Action>

        <ShareButton />
        <M.BoxWrapper>
          <M.BoxLeft>
            <h1 style={{ color: '#fff', fontSize: '24px' }} >
              Zoro.to - The best site to watch anime online for Free
            </h1>
            <p style={{ fontSize: '14px', lineHeight: "1.4" }}>
              Do you know that according to Google, the monthly search volume for anime related topics is up to over 1 Billion times? Anime is famous worldwide and it is no wonder we've seen a sharp rise in the number of free anime streaming sites.
            </p>
            <p style={{ fontSize: '14px', lineHeight: "1.4" }}>
              Just like free online movie streaming sites, anime watching sites are not created equally, some are better than the rest, so we've decided to build Zoro.to to be one of the best free anime streaming site for all anime fans on the world.
            </p>
            <h2 style={{ color: '#fff', fontSize: '22px' }}>
              1/ What is Zoro.to?
            </h2>
            <p style={{ fontSize: '14px', lineHeight: "1.4" }}>Zoro.to is a free site to watch anime and you can even download subbed or dubbed anime in ultra HD quality without any registration or payment. By having No Ads in all kinds, we are trying to make it the safest site for free anime.</p>
            <h2 style={{ color: '#fff', fontSize: '22px' }}>
              2/ Is Zoro.to safe?
            </h2>
            <p style={{ fontSize: '14px', lineHeight: "1.4" }}>Yes we are, we do have only one Ads to cover the server cost and we keep scanning the ads 24/7 to make sure all are clean, If you find any ads that is suspicious, please forward us the info and we will remove it.</p>
            <h2 style={{ color: '#fff', fontSize: '22px' }}>
              3/ So what make Zoro.to the best site to watch anime free online?
            </h2>
            <p style={{ fontSize: '14px', lineHeight: "1.4" }}>Before building Zoro.to, we've checked many other free anime sites, and learnt from them. We only keep the good things and remove all the bad things from all the competitors, to put it in our Zoro website. Let's see how we're so confident about being the best site for anime streaming:</p>



          </M.BoxLeft>
          <M.BoxRight>
            <h1 style={{ color: '#fff', fontSize: '24px' }}>
              Trending Posts
            </h1>
            <M.Card>
              <M.CardInfo>
                <div style={{ display: 'flex', gap: '1em' }}>
                  <p style={{ color: "yellow" }}>#Question</p> <p>4 hours ago</p>
                </div>
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '.3em' }}
                >
                  <FaComment />
                  <p>149</p>
                </div>
              </M.CardInfo>
              <M.CardTitle>Naruto shippuden is so overrated and boring 💀💀😒</M.CardTitle>
              <M.CardText>
                I slept so fast while watching naruto shippuden...naruto og was good..naruto shippuden made me drop naruto more than 10 times...honestly at this point..naruto should be last
              </M.CardText>
              <M.CardProfile>
                <img
                  src="/10.png"
                  alt=""
                  width={30}
                  height={30}
                  style={{ borderRadius: '50%' }}
                />
                <p>Vanduc19it</p>
              </M.CardProfile>
            </M.Card>
            <M.Card>
              <M.CardInfo>
                <div style={{ display: 'flex', gap: '1em' }}>
                  <p>#General</p> <p>6 hours ago</p>
                </div>
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '.3em' }}
                >
                  <FaComment />
                  <p>141</p>
                </div>
              </M.CardInfo>
              <M.CardTitle>What are you most scared of ?</M.CardTitle>
              <M.CardText>
                barbers , they messup my hairs everytime
              </M.CardText>
              <M.CardProfile>
                <img
                  src="/11.png"
                  alt=""
                  width={30}
                  height={30}
                  style={{ borderRadius: '50%' }}
                />
                <p>LEVI Dolphin</p>
              </M.CardProfile>
            </M.Card>
            <M.Card>
              <M.CardInfo>
                <div style={{ display: 'flex', gap: '1em' }}>
                  <p>#General</p> <p>4 hours ago</p>
                </div>
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '.3em' }}
                >
                  <FaComment />
                  <p>69</p>
                </div>
              </M.CardInfo>
              <M.CardTitle>Hello I am new here on Zoro🥰🥰</M.CardTitle>
              <M.CardText>
                Pleasure to meet you all😊
              </M.CardText>
              <M.CardProfile>
                <img
                  src="/12.png"
                  alt=""
                  width={30}
                  height={30}
                  style={{ borderRadius: '50%' }}
                />
                <p>Demen😈</p>
              </M.CardProfile>
            </M.Card>
            <M.Card>
              <M.CardInfo>
                <div style={{ display: 'flex', gap: '1em' }}>
                  <p>#General</p> <p>2 hours ago</p>
                </div>
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '.3em' }}
                >
                  <FaComment />
                  <p>135</p>
                </div>
              </M.CardInfo>
              <M.CardTitle>FINALLY DOLPHIN 🐬 !!!</M.CardTitle>
              <M.CardText>
                Yeahh! after so much hardwork and dedication, 2 days ago I was finally able to reach the rank of Dolphin 🐬. This accomplishment was only possible due to the support I
              </M.CardText>
              <M.CardProfile>
                <img
                  src="/13.png"
                  alt=""
                  width={30}
                  height={30}
                  style={{ borderRadius: '50%' }}
                />
                <p>KenYeager Dolphin</p>
              </M.CardProfile>
            </M.Card>
          </M.BoxRight>
        </M.BoxWrapper>
        <M.Footer>
          <p style={{ fontSize: '14px', lineHeight: "0.2" }}>©2023 Zoro.to. All rights reserved.</p>
          <p style={{ fontSize: '14px', lineHeight: "0.2" }}>Mangareader - Read Manga Online For FREE</p>
          <p style={{ fontSize: '14px', lineHeight: "0.2" }}>Zoro Proxy Sites</p>
        </M.Footer>
      </M.Container>
    </>
  )
}

export default Main
