import { Link } from 'react-router-dom'
import { Button} from "@chakra-ui/button";
import style from './style.module.css'
import {  RootStateOrAny,useSelector, useDispatch } from 'react-redux'
import { addSelectedTracks, substractSelectedTracks } from '../../store/playlist'
import { Box } from "@chakra-ui/layout";
import PropTypes from 'prop-types';

import React from 'react'


const Track = ({track}) => {
  const dispatch = useDispatch()
  const selectedTracks = useSelector((state:RootStateOrAny) => state.playlist.selectedTracks)

  const isSelected = selectedTracks.includes(track.uri)

  const handleSelect = () => {
    if (isSelected) {
      dispatch(substractSelectedTracks(track.uri))
    } else {
      dispatch(addSelectedTracks(track.uri))
    }
  }

  const artists = track.artists.map((artist, index) => {
    const isLast = index === track.artists.length - 1
    return (
      <Link to={artist.external_urls.spotify} key={artist.id}>
        {artist.name + (isLast ? '' : ', ')}
      </Link>
    )
  })

  const image = track.album.images.find(image => image.width === 64)

  return (
    <Box borderWidth="5px" borderRadius="md" ml="5" className={style.wrapper}>
      <img className={style.image} src={image.url} alt={track.name} />
      <span className={style.info}>
        <a className={style.title} href={track.external_urls.spotify}>{track.name}</a>
        <p className={style.artist}>{artists}</p>
      </span>
      <span className={style.action}>
        <Button onClick={handleSelect} colorScheme="blue" variant="solid" mr="5"  >
          {isSelected ? 'Deselect' : 'Select'}
        </Button>
      </span>
    </Box>
  )
}

Track.propTypes = {
  track: PropTypes.string
};

export default Track
