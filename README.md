# 🎶 Jamming - Spotify Playlist Creator

Jamming è una web app creata con React che consente agli utenti di cercare brani su Spotify, creare playlist personalizzate e salvarle direttamente sul proprio account Spotify.

## 🚀 Funzionalità
- **Ricerca Brani**: Effettua ricerche di brani utilizzando l'API di Spotify.
- **Aggiungi alla Playlist**: Seleziona i brani che preferisci per creare una playlist personalizzata.
- **Modifica Nome della Playlist**: Imposta un nome personalizzato per la tua nuova playlist.
- **Salva su Spotify**: Salva la tua playlist direttamente sul tuo account Spotify.

## 🛠️ Installazione

### Prerequisiti
- [Node.js](https://nodejs.org) installato sul proprio computer.
- Un account Spotify e l'accesso al [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/) per ottenere le credenziali necessarie (Client ID e Client Secret).

### Passaggi per l'installazione
1. **Clona il repository**:
   ```bash
   git clone https://github.com/tuo-username/jamming.git
   cd jamming
   ```
2. **Installa le dipendenze:**

```bash
npm install
```
3. **Crea il file** .env: Nella directory principale del progetto, crea un file chiamato .env e aggiungi le seguenti variabili con il tuo Client ID e Client Secret di Spotify:
```
REACT_APP_SPOTIFY_CLIENT_ID=tuo_client_id
REACT_APP_SPOTIFY_CLIENT_SECRET=tuo_client_secret
```
4. **Aggiungi** .env al file .gitignore: Assicurati che il file .env non venga caricato su GitHub aggiungendolo al .gitignore:
```
# Environment variables
.env
```
5. **Avvia l'applicazione**:
```
npm start
```
L'app sarà disponibile su http://localhost:3000.

## 📁 Struttura del Progetto
- App.js: Componente principale dell’app che gestisce lo stato globale.
- Search.js: Componente per la ricerca dei brani su Spotify.
- Result.js: Visualizza i risultati della ricerca e permette di aggiungere brani alla playlist.
- Playlist.js: Gestisce la visualizzazione e il salvataggio della playlist creata.
- TrackList.js: Mostra una lista di tracce, con opzioni per aggiungere o rimuovere brani.
- Track.js: Si occupa di mostra ogni singola traccia con titolo,artista e album.
  
## 📝 Configurazione API di Spotify
Vai su Spotify Developer Dashboard e crea un'app.
Copia il Client ID e il Client Secret forniti.
Aggiungi questi valori nel file .env come mostrato sopra.
Configura il Redirect URI nel Spotify Developer Dashboard (puoi usare http://localhost:3000/callback per l'ambiente di sviluppo).

## 🛠️ Tecnologie Utilizzate
- React
- Spotify Web API

## ⚠️ Note di Sicurezza
Non condividere il file .env o le tue credenziali su GitHub o altre piattaforme pubbliche.
Controlla sempre di aver aggiunto .env al .gitignore prima di eseguire commit o push.

