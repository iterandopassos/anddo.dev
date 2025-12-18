import React from 'react';
import LoadingScreen from './LoadingScreen'; // Ou o nome que você der ao arquivo

function App() {
  return (
    <div className="App">
      <LoadingScreen />
      {/* Aqui você pode adicionar lógica para mostrar o portfólio completo depois do loading, 
          transformando esta tela na introdução da sua SPA.
      */}
    </div>
  );
}

export default App;