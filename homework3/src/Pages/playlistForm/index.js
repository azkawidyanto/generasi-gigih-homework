const PlaylistForm =({title,description,getInput,createPlaylist})=>{

    return(
        <>
        <form>
            <label for="title">title</label>
            <input type="text" id="title" value={title} name="name" onChange={getInput} />
            <label for="description">Description</label>
            <input type="text" id="description" value={description} name="name" onChange={getInput} />
            <button type="submit" value="Submit" onClick={createPlaylist}>Create Playlist</button>
        </form>
        </>
    );

}

export default PlaylistForm;