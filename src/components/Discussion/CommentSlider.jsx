import React from 'react'
import { Navigation, Scrollbar, A11y, FreeMode } from 'swiper'

import { C } from './commentslider.style'
import avatar from '../../assets/images/avatar2-04.png'

export default () => {
  return (
    <C.SwiperContainer>
      <C.Swiper
        modules={[Navigation, Scrollbar, A11y, FreeMode]}
        slidesPerView={'auto'}
        freeMode={true}
        scrollbar={{ el: '.swiper-scrollbar' }}
      >
        <C.SwiperSlide >
          <C.Item>
            <C.Profile>
              <C.ProfileImg src={avatar} style={{ borderRadius: "50%" }} />
              <C.ProfileDetails>
                <C.Name style={{ marginTop: "4px" }}>Minato</C.Name>
                <C.Time style={{ marginTop: "4px" }}>- a minute ago</C.Time>
              </C.ProfileDetails>
            </C.Profile>
            <C.Comment style={{ paddingTop: "10px" }}>Peak episode man wow </C.Comment>
            <C.AnimeName>Naruto</C.AnimeName>
          </C.Item>
        </C.SwiperSlide>
        <C.SwiperSlide >
          <C.Item>
            <C.Profile>
              <C.ProfileImg src="/14.png" style={{ borderRadius: "50%" }} />
              <C.ProfileDetails>
                <C.Name style={{ marginTop: "4px" }}>guyhuman</C.Name>
                <C.Time style={{ marginTop: "4px" }}>- a minute ago</C.Time>
              </C.ProfileDetails>
            </C.Profile>
            <C.Comment style={{ textAlign: "center", paddingTop: "10px" }}>10/10 as always love this anime 🥰🥰🥰</C.Comment>
            <C.AnimeName>Dragon Ball Z</C.AnimeName>
          </C.Item>
        </C.SwiperSlide>
        <C.SwiperSlide >
          <C.Item>
            <C.Profile>
              <C.ProfileImg src="/15.png" style={{ borderRadius: "50%" }} />
              <C.ProfileDetails>
                <C.Name style={{ marginTop: "4px" }}>Mitsuha23</C.Name>
                <C.Time style={{ marginTop: "4px" }}>- a minute ago</C.Time>
              </C.ProfileDetails>
            </C.Profile>
            <C.Comment style={{ textAlign: "center", paddingTop: "10px" }}>omaigot 🥰🥰🥰</C.Comment>
            <C.AnimeName>Mashle: Magic and Muscles</C.AnimeName>
          </C.Item>
        </C.SwiperSlide>
        <C.SwiperSlide >
          <C.Item>
            <C.Profile>
              <C.ProfileImg src="/16.png" style={{ borderRadius: "50%" }} />
              <C.ProfileDetails>
                <C.Name style={{ marginTop: "4px" }}>Robinn</C.Name>
                <C.Time style={{ marginTop: "4px" }}>- a minute ago</C.Time>
              </C.ProfileDetails>
            </C.Profile>
            <C.Comment style={{ textAlign: "center", paddingTop: "10px" }}>Ohhh man I love this anime sooooo much..</C.Comment>
            <C.AnimeName>One Piece</C.AnimeName>
          </C.Item>
        </C.SwiperSlide>

        {[1, 2, 3, 4, 5, , 6, 7, 8, 9, 10].map((item) => (
          <C.SwiperSlide key={item}>
            <C.Item>
              <C.Profile>
                <C.ProfileImg src="/17.png" />
                <C.ProfileDetails>
                  <C.Name style={{ marginTop: "4px" }}>Sam</C.Name>
                  <C.Time style={{ marginTop: "4px" }}>- a minute ago</C.Time>
                </C.ProfileDetails>
              </C.Profile>
              <C.Comment style={{ textAlign: "center", paddingTop: "10px" }}>episode 134 done ✔</C.Comment>
              <C.AnimeName>Naruto</C.AnimeName>
            </C.Item>
          </C.SwiperSlide>
        ))}
      </C.Swiper>
      <div className="swiper-scrollbar"></div>
    </C.SwiperContainer>
  )
}
