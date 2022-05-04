# Codebreaker Game
## Minha versãozinha básica do jogo de tabuleiro Codebreaker. Feito pra passar tempo e ter mais contato com front-end.
<p><strong>Como posso entrar no jogo?</strong></p>
<p>É só baixar tudo e abrir o index.html no seu navegador.</p>
<p><strong>Tem código malicioso?</strong></p>
<p>Sei nem fazer isso, tudo que tem é javascript mal feito, suficiente pra fazer o jogo funcionar (preciso refatorar esse treco).</p>
<hr>
<p>Abaixo está a tela única onde todo o jogo acontece. O objetivo é descobrir uma sequência aleatória de 4 números, para isso o jogador possui 10 tentativas. Do lado esquerdo da tela estão os botões para o jogador inserir seu palpite na tabela de tentativas.</p>
<a href="https://imgur.com/qP9wylU"><img src="https://i.imgur.com/qP9wylU.jpg" title="source: imgur.com" /></a>
<hr>
<p>A cada tentativa, o jogador receberá dicas, um pontinho verde significa que o número está correto e também está na posição correta, um amarelo indica que o número está correto (faz parte do código), mas está na posição errada, por fim, um ponto vermelho significa que aquele número está errado.</p>
<a href="https://imgur.com/j1L6YCi"><img src="https://i.imgur.com/j1L6YCi.jpg" title="source: imgur.com" /></a>
<hr>
<p>Abaixo está a imagem de um jogo concluído com sucesso. Observe que na primeira tentativa é mostrado um ponto vermelho, seguindo por dois amarelos e um verde. Significa que o primeiro número (1) não existe na sequência sorteada, que o segundo e terceiro números (2, 3) existem, mas estão na posição errada e que o último número (4) está correto e na posição correta. Através dessas dicas o jogador deve buscar descobrir a sequência correta.</p>
<a href="https://imgur.com/2DYvVKq"><img src="https://i.imgur.com/2DYvVKq.jpg" title="source: imgur.com" /></a>
<hr>
<p>Seguindo as dicas, depois que o jogador se habitua ao jogo é possível encontrar o código com um número de tentativas muito abaixo das 10 disponíveis. Por isso há a opção 'Shuffle Hints'. Com ela ativada as dicas ficarão embaralhadas e o jogador não poderá saber qual ponto está se referindo a qual número. Na imagem abaixo observe que a cada tentativa as dicas mudavam de lugar, mesmo usando o mesmo código, com isso só é possível ao jogador saber que naquela sequência há um número correto, um errado e dois fora de lugar. Com isso a dificuldade aumenta consideravelmente e muitas vezes podemos chegar ao tão amado game over.</p>
<a href="https://imgur.com/mqzjKeX"><img src="https://i.imgur.com/mqzjKeX.jpg" title="source: imgur.com" /></a>
<hr>
<p>Firulas extras:</p>
<ul>
  <li>Quando o jogador ganha a tela fica verde e toca a musiquinha de vitória de FF</li>
  <li>Quando perde, temos uma tela vermelha com o sonzinho do Mário perdendo uma vida</li>
</ul>
