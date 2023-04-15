import React from 'react'
import { T } from './tredingposts.style'
import { FaComment } from 'react-icons/fa'
import zorosmall from '../../assets/images/zoro-small.jpeg'

const TrendingPosts = () => {
  return (
    <T.CardList>


      <T.Card >
        <T.CardInfo>
          <div style={{ display: 'flex', gap: '1em' }}>
            <p style={{ color: 'yellow' }}>#Question</p> <p>2 hours ago</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.3em' }}>
            <FaComment color="#fff" />
            <p style={{ color: '#fff' }}>149</p>
          </div>
        </T.CardInfo>
        <T.CardTitle>Naruto shippuden is so overrated and boring 💀💀😒</T.CardTitle>
        <T.CardText>
          I slept so fast while watching naruto shippuden...naruto og was good..naruto shippuden made me drop naruto more than 10
        </T.CardText>
        <T.CardProfile>
          <img
            src="/10.png"
            alt=""
            width={30}
            height={30}
            style={{ borderRadius: '50%' }}
          />
          <p>Vanduc19it</p>
        </T.CardProfile>
      </T.Card>

      <T.Card >
        <T.CardInfo>
          <div style={{ display: 'flex', gap: '1em' }}>
            <p style={{ color: '#4da6ff' }}>#General</p> <p>4 hours ago</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.3em' }}>
            <FaComment color="#fff" />
            <p style={{ color: '#fff' }}>100</p>
          </div>
        </T.CardInfo>
        <T.CardTitle>What are you most scared of ?</T.CardTitle>
        <T.CardText>
          barbers , they messup my hairs everytime
        </T.CardText>
        <T.CardProfile>
          <img
            src="/11.png"
            alt=""
            width={30}
            height={30}
            style={{ borderRadius: '50%' }}
          />
          <p>LEVI DOLPHIN</p>
        </T.CardProfile>
      </T.Card>
      <T.Card >
        <T.CardInfo>
          <div style={{ display: 'flex', gap: '1em' }}>
            <p style={{ color: '#4da6ff' }}>#General</p> <p>5 hours ago</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.3em' }}>
            <FaComment color="#fff" />
            <p style={{ color: '#fff' }}>135</p>
          </div>
        </T.CardInfo>
        <T.CardTitle>Hello I am new here on Zoro🥰🥰</T.CardTitle>
        <T.CardText>
          Pleasure to meet you all😊
        </T.CardText>
        <T.CardProfile>
          <img
            src="/12.png"
            alt=""
            width={30}
            height={30}
            style={{ borderRadius: '50%' }}
          />
          <p>
            Demen😈</p>
        </T.CardProfile>
      </T.Card>
      <T.Card >
        <T.CardInfo>
          <div style={{ display: 'flex', gap: '1em' }}>
            <p style={{ color: '#4da6ff' }}>#General</p> <p>3 hours ago</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.3em' }}>
            <FaComment color="#fff" />
            <p style={{ color: '#fff' }}>141</p>
          </div>
        </T.CardInfo>
        <T.CardTitle>FINALLY DOLPHIN 🐬 !!!</T.CardTitle>
        <T.CardText>
          Yeahh! after so much hardwork and dedication, 2 days ago I was finally able to reach the rank of Dolphin 🐬. This accomplishment was only
        </T.CardText>
        <T.CardProfile>
          <img
            src="/13.png"
            alt=""
            width={30}
            height={30}
            style={{ borderRadius: '50%' }}
          />
          <p>KenYeager
            DOLPHIN</p>
        </T.CardProfile>
      </T.Card>
      <T.Card >
        <T.CardInfo>
          <div style={{ display: 'flex', gap: '1em' }}>
            <p style={{ color: '#4da6ff' }}>#General</p> <p>6 hours ago</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.3em' }}>
            <FaComment color="#fff" />
            <p style={{ color: '#fff' }}>69</p>
          </div>
        </T.CardInfo>
        <T.CardTitle>One Piece is Mid , It's Trash , It's Overrated Blah Blah .</T.CardTitle>
        <T.CardText>
          Calling a Animanga overrated with just a Flaw of being too Long and Slow Paced . Because One Piece have the biggest Fandom Currently so Just
        </T.CardText>
        <T.CardProfile>
          <img
            src="/14.png"
            alt=""
            width={30}
            height={30}
            style={{ borderRadius: '50%' }}
          />
          <p>Zoro</p>
        </T.CardProfile>
      </T.Card>
      <T.Card >
        <T.CardInfo>
          <div style={{ display: 'flex', gap: '1em' }}>
            <p style={{ color: '#4da6ff' }}>#General</p> <p>10 hours ago</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.3em' }}>
            <FaComment color="#fff" />
            <p style={{ color: '#fff' }}>18</p>
          </div>
        </T.CardInfo>
        <T.CardTitle>What if you had death note 🎵 📖</T.CardTitle>
        <T.CardText>
          Who's you are gonna write ✍️ Lets see your opinions Have a nice day
        </T.CardText>
        <T.CardProfile>
          <img
            src="/15.png"
            alt=""
            width={30}
            height={30}
            style={{ borderRadius: '50%' }}
          />
          <p>☾︎ᴅᴀʀᴋ-ᴘʀɪɴᴄᴇ☽︎</p>
        </T.CardProfile>
      </T.Card>
    </T.CardList>
  )
}

export default TrendingPosts
