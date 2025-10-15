const modal = document.getElementById('modal');
const nome = document.getElementById('nome');
const personagem = document.getElementById('personagem');
const email = document.getElementById('email');
const descricao = document.getElementById('descricao');

const elenco = [
  {nome: "Rafaela", personagem: "Adela", email: "rafaela.adela@teatroficcional.com", descricao: "A mais jovem e rebelde das filhas. Adela é a chama que insiste em queimar mesmo sob o luto. Desafia as regras e carrega nos olhos a vontade de viver o que lhe é proibido."},
  {nome: "Gabriele", personagem: "Bernarda Alba", email: "gabriele.bernarda@teatroficcional.com", descricao: "Viúva e autoritária, Bernarda é o ferro que molda o medo. Sua casa é prisão e espelho, e o silêncio sua sentença."},
  {nome: "Gabrielly", personagem: "Martirio", email: "gabrielly.martirio@teatroficcional.com", descricao: "Marcada pela inveja e pela dor, Martirio vive entre o desejo e o medo de desejar. Sua alma é o espelho rachado da repressão."},
  {nome: "Sofia", personagem: "Angustias", email: "sofia.angustias@teatroficcional.com", descricao: "A mais velha das filhas, herdeira do dinheiro e da solidão. Angustias é o retrato da mulher que espera sem esperança."},
  {nome: "Sophia", personagem: "Magdalena", email: "sophia.magdalena@teatroficcional.com", descricao: "Cansada e amarga, Magdalena chora o que perdeu antes mesmo de viver. É a resignação que Bernarda tanto admira."},
  {nome: "Anna", personagem: "Amelia", email: "anna.amelia@teatroficcional.com", descricao: "Suave e silenciosa, Amelia é o sussurro que tenta aliviar a dor das irmãs. Vive para apaziguar o inevitável."},
  {nome: "Julia", personagem: "Criada", email: "julia.criada@teatroficcional.com", descricao: "A criada, que tudo vê e nada diz. Carrega o cansaço das paredes, mas é a única que ainda se permite rir em segredo."},
  {nome: "Djulia", personagem: "Maria Josefa", email: "djulia.maria@teatroficcional.com", descricao: "A mãe idosa e enlouquecida de Bernarda. Diz verdades com a voz da loucura e sonha em casar-se livre no mar."},
  {nome: "Jeniffer", personagem: "Prudencia", email: "jeniffer.prudencia@teatroficcional.com", descricao: "A amiga que observa de fora o destino das mulheres da casa. Prudência é o eco da sociedade que julga e nada faz."}
];

const elencoContainer = document.getElementById('elenco');

elenco.forEach(member => {
  const btn = document.createElement('button');
  btn.textContent = member.nome;
  btn.addEventListener('click', () => abrirModal(member));
  elencoContainer.appendChild(btn);
});

function abrirModal(member) {
  nome.textContent = member.nome;
  personagem.textContent = `Personagem: ${member.personagem}`;
  email.textContent = `📧 ${member.email}`;
  descricao.textContent = member.descricao;
  modal.style.display = 'flex';
}

function fecharModal() {
  modal.style.display = 'none';
}

window.onclick = function(e) {
  if (e.target === modal) fecharModal();
}
