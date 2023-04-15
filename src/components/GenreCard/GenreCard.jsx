import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGenre } from '../../hooks/useAnime'
import { G } from './genre.style'

const GenreCard = () => {
  const navigate = useNavigate()
  const clickHandler = (e) => {
    navigate(`/genre/${e.target.innerText.toLowerCase()}`)
  }
  return (
    <G.Card>
      <G.List>
        <G.Item onClick={clickHandler}>Action</G.Item>
        <G.Item onClick={clickHandler}>Adventure</G.Item>
        <G.Item onClick={clickHandler}>Cars</G.Item>
        <G.Item onClick={clickHandler}>Comedy</G.Item>
        <G.Item onClick={clickHandler}>Dementia</G.Item>
        <G.Item onClick={clickHandler}>Demons</G.Item>
        <G.Item onClick={clickHandler}>Drama</G.Item>
        <G.Item onClick={clickHandler}>Ecchi</G.Item>
        <G.Item onClick={clickHandler}>Fantasy</G.Item>
        <G.Item onClick={clickHandler}>Game</G.Item>
        <G.Item onClick={clickHandler}>Action</G.Item>
        <G.Item onClick={clickHandler}>Adventure</G.Item>
        <G.Item onClick={clickHandler}>Kids</G.Item>
        <G.Item onClick={clickHandler}>Magic</G.Item>
        <G.Item onClick={clickHandler}>Josei</G.Item>
        <G.Item onClick={clickHandler}>Demons</G.Item>
        <G.Item onClick={clickHandler}>Drama</G.Item>
        <G.Item onClick={clickHandler}>Ecchi</G.Item>
        <G.Item onClick={clickHandler}>Music</G.Item>
        <G.Item onClick={clickHandler}>Military</G.Item>
        <G.Item onClick={clickHandler}>Mecha</G.Item>
        <G.Item onClick={clickHandler}>Mystery</G.Item>
        <G.Item onClick={clickHandler}>Parody</G.Item>
        <G.Item onClick={clickHandler}>Police</G.Item>
      </G.List>
      <button style={{ width: "100%", height: "36px", marginTop: "6px", background: "#3d3e44", color: "#fff", borderRadius: "2px" }}>Show more</button>
    </G.Card>
  )
}

export default GenreCard
