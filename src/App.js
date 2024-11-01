import React, { useState, useCallback } from 'react';
import style from './App.css';
import Spotify from './Spotify.js';
import Search from './Search.js';
import Result from './Result.js';
import Playlist from './Playlist.js';

function App() {
  //assegno le variabili di stato per memorizzare:
  //-Array dei risultati
  //-Nome della playlist
  //-Array delle tracce della playlist
  const [result, setResult] = useState([]);
  const [nomePlaylist, setNomePlaylist] = useState("New Playlist");
  const [traccePlaylist, setTraccePlaylist] = useState([]);

  //Funzione di ricerca all'interno dell'array dei brani e 
  //salvataggio nella variabile di stato
  const search = useCallback((titolo) => {
    Spotify.search(titolo).then(setResult);
  }, []);

  //Funzione per aggiungere tracce alla playlist
  //con controllo che non ci sia già la traccia e inserimento con "..." per 
  //non perdere le tracce precedenti
  const addTrack = useCallback((track) =>{
    if(traccePlaylist.some((traccesalvate)=> traccesalvate.id === track.id)){
      return;
    }
    setTraccePlaylist((traccia)=>[...traccia , track]);
  }, [traccePlaylist]);

  //Funzione per rimuovere una traccia usando filter per creare un nuovo array
  //e poi assegnarlo a setTraccePlaylist
  const removeTrack = useCallback((track) => {
    setTraccePlaylist((tracciaPrec) => 
      tracciaPrec.filter((traccia) => traccia.id !== track.id ));
  },[]);
  
  //Funzione per esportare la playlist creando un array degli URI ed esportandolo
  //con la funzione all'interno del file brani ----->>> !!!! ancora da implementare
  const salvaPlaylist = useCallback(()=>{
    const arrayUri = traccePlaylist.map((traccia) => traccia.uri);
    Spotify.salvaPlaylist(nomePlaylist,arrayUri).then(()=>{
      setNomePlaylist("New Playlist");
      setTraccePlaylist([]);
    });
  },[nomePlaylist, traccePlaylist]);

  //Funzione per modificare il nome della playlist
  const aggiornaNomePlaylist = useCallback((nome) => {
    setNomePlaylist(nome);
  },[]);

  return(
    <div className='App'>
      <h1 className="title">
        Ja<strong>mm</strong>ing
      </h1>
      <div className="search">
          <Search onSearch={search} />
      </div>
      <div className="corpo">
          <div className="song">
            <Result  result={result} onAdd={addTrack}/>
          </div>
          <div className="song">
            <Playlist
              nomePlaylist={nomePlaylist}
              traccePlaylist={traccePlaylist}
              onNameChange={aggiornaNomePlaylist}
              onRemove={removeTrack}
              onSave={salvaPlaylist}
            />
          </div>
      </div>
    </div>
  );
}

export default App;
