fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error('BŁĄD!!!');
    }
    return response.json();
  })
  .then(posty => {
    const tabela = document.getElementById('tabela');
    posty.forEach(post => {
      const wiersz = document.createElement('tr');          
      const komorkaId = document.createElement('td');
      komorkaId.textContent = post.id;
      wiersz.appendChild(komorkaId);            
      const komorkaTytul = document.createElement('td');
      komorkaTytul.textContent = post.title;
      wiersz.appendChild(komorkaTytul);      
      const komorkaTresc = document.createElement('td');
      komorkaTresc.textContent = post.body;
      wiersz.appendChild(komorkaTresc);         
      tabela.appendChild(wiersz);
    });
  })


