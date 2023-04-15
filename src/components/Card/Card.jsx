import React from 'react'
import { C } from './card.style'
import styled from 'styled-components'
import './card.css'

const Card = ({ data }) => {
  return (
    <C.Card className='play' >
      <C.Poster>
        <C.Image src={data.entry.images.jpg.image_url} />
        <C.InfoL>
          <C.BtnL>SUB</C.BtnL> <C.BtnL>DUB</C.BtnL>
        </C.InfoL>
        <C.InfoR>
          <C.BtnR>Ep {data.episodes[0].mal_id}</C.BtnR>
        </C.InfoR>
      </C.Poster>
      <C.Details>
        <C.Name>{data.entry.title}</C.Name>
      </C.Details>
      <button className='btn-play'>  <C.Image src="/play1.png" alt="" style={{ width: "34px", height: "34px", margin: "100px auto" }} /></button>
    </C.Card>
  )
}

export default Card
