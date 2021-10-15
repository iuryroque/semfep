import React from 'react';
import { Link } from 'react-router-dom';

import './FrameWork.css';

class FrameWork extends React.Component {
  render() {
    return (
      <div>
        <section className="container-framework">
          <h1 className="title-framework">
            Informações Sobre Enquadramento e Submissão de Trabalhos
          </h1>

          <h4>A quem se destina</h4>
          <p>
            O VI SEMFEP é destinado a professores e estudantes, bem como
            pesquisadores estudantes ou professores que se situam nos
            territórios da educação, sejam nas graduações ou pós-graduações.
          </p>

          <h4>Que trabalhos podem ser enquadrados e submetidos</h4>
          <p>
            Para o VI SEMFEP, serão aceitas submissões de trabalhos que se
            prestem às problematizações aqui delimitadas com argumentações
            derivadas de pesquisas acadêmicas ou não.
          </p>

          <h4>Prazos</h4>
          <p>
            As inscrições para enquadramentos e submissões de trabalhos,
            acontecerão de <strong>18 a 31 de outubro de 2021</strong>.
          </p>
          <p>
            Todos/as que fizerem enquadramento e submissão de trabalhos através
            da{' '}
            <a href="http://www.semfep.ufba.br/ " target="_blank">
              página do GERE
            </a>{' '}
            estarão automaticamente inscritos no evento. Para aqueles/as que não
            irão enquadrar e submeter trabalhos, e desejam participar somente
            como ouvintes, o prazo de inscrição é até{' '}
            <strong>19 de novembro de 2021</strong>.
          </p>

          <h4>Inscrições e Certificações</h4>
          <p>
            Todas as inscrições no VI SEMFEP serão gratuitas e realizadas
            exclusivamente através da página do{' '}
            <a href="http://www.semfep.ufba.br/" target="_blank">
              Sistema de Gerenciamento de Eventos da UFBA - GERE{' '}
            </a>
            .
          </p>

          <p>
            Para receber o certificado do evento, todos/as deverão estar
            inscritos como descrito acima, assim como, assinar a frequência das
            sessões remotas presenciais através de um formulário que será
            disponibilizado apenas no ato desses momentos, pela organização do
            evento.
          </p>

          <h3 className="subtitle-framework">UM FRAME PARA CHAMAR DE MEU</h3>
          <p>
            Neste ano da graça de 2021, o Grupo FEP comemora 15 primaveras e
            para celebrar de forma marcante, escolheu produzir um evento sem
            tema? É com esse ímpeto que VI SEMFEP pretende problematizar o modo
            peculiar com que são propagadas pelas redes sociais, aquém ou além
            delas, algumas das visões mais comuns sobre a educação brasileira,
            que produzem ou remetem a territórios bem consolidados, como se pode
            observar pelo uso ostensivo que fazem de palavras de ordem,{' '}
            <i>slogans</i> e <i>hashtags</i>.
          </p>
          <p>
            Quem esteve em navegando pelo Instagram e Facebook nos últimos
            meses, ou por outros lugares do ambiente digital veiculadores dos
            discursos da área da Educação, e até mesmo pelas ruas com olhos
            atentos, vislumbra certos enquadramentos comuns e persistentes, as
            pequenas peças de divulgação propagadas por ocasião da campanha para
            <i>Ato Público Nacional Educação Contra a Barbárie</i>, deflagrado
            pela Universidade Federal da Bahia (maio/2021), são exemplos a que
            podemos nos remeter.
          </p>
          <p>
            Neste VI SEMFEP, tomaremos proveito dessas derivas que temos
            realizado através dos portais, plataformas e redes sociais, e suas
            intersecções com os nossos cotidianos em exercício de formação de
            professores, para problematizar o modo peculiar que fazem uso as
            diversas publicações enquadradas no plano educacional a que temos
            sido expostos diuturnamente ao atravessarem as circunstâncias
            geohistóricas em que cada um de nós está imerso, e que conceituações
            e teorizações podemos produzir a partir das palavras de ordem e
            slogans disseminados como pertencentes à educação brasileira, aqui,
            para as finalidades do evento e da submissão de trabalhos,
            identificadas como{' '}
            <strong>
              <i>Frames</i>
            </strong>
            .
          </p>
          <p>
            Palavra estrangeira cunhada no âmbito da técnica de fotografia e
            cinema, o frame (lê-se: frei-me), quer dizer em tradução direta
            “quadro”, é daí que podemos derivar para enquadramento, mas podemos
            percebê-lo também como um emolduramento, no sentido de que o Frame é
            uma demarcação do que se vê. Em um texto para a{' '}
            <a
              href="https://revistacult.uol.com.br/home/jacarezinho-conflito-de-interpretacao-sentenca-da-bala/"
              target="_blank"
            >
              Revista Cult
            </a>{' '}
            de maio deste ano, que foi a inspiração para a produção VI SEMFEP, o
            Professor Wilson Gomes define Frame tal como o que “resulta do
            emprego de um ângulo de abordagem e da adoção de um ponto de vista,
            (...) uma perspectiva. Por definição, um Frame, um enquadramento,
            não nos dá toda a paisagem, impondo os limites do que conseguimos
            ver, mas na nossa experiência nos parece sempre aquela janela pela
            qual olhamos o mundo [como] está [e] tudo o que poderia ser visto”.
          </p>
          <p>
            Sobre o plano da educação brasileira, o VI SEMFEP delimitou os
            seguintes e provisórios Frames, com suas respectivas
            problematizações fundamentadas em referências artísticas:
          </p>
          <p>
            {' '}
            <strong>RESISTÊNCIA:</strong> <i>Resistir é preciso?</i>
          </p>
          <p>
            <strong>SERIEDADE:</strong>{' '}
            <i>Para que tanta seriedade, quer virar herói ou heroína?</i>
          </p>
          <p>
            <strong>MOVIMENTO:</strong>{' '}
            <i>E se movimentar for sempre ter uma pedra no caminho?</i>
          </p>
          <p>
            <strong>FELICIDADE:</strong>{' '}
            <i>Tristeza não tem fim, felicidade sim?</i>
          </p>
          <p>
            <strong>AUTONOMIA:</strong>{' '}
            <i>
              Autonomizar na educação para (continuar a) morrer pela pátria e
              viver sem razão?
            </i>
          </p>
          <p>
            <strong>LINGUAGEM:</strong>
            <i>Viver sem as viradas de páginas ou morrer de lamber os dedos?</i>
          </p>
          <p>
            <strong>TRANSFORMAÇÃO:</strong>{' '}
            <i>E se pra mudar, bastar existir?</i>
          </p>
          <p>
            <strong>SAUDADE:</strong> <i>Chega de Saudade?</i>
          </p>
          <p>
            Se você está aqui nesta área dedicada ao enquadrar seu trabalho, é
            porque já deve ter escolhido um <i>Frame</i> para chamar de seu. Se
            isso ainda não aconteceu, recomendamos que volte para a{' '}
            <Link to="/visemfep/frames"> página inicial do VI SEMFEP </Link>, e
            busque por qual perspectiva mais te provoca sensações antes de
            submeter seu trabalho. Mas se ao contrário, você já derivou por
            todos os frames, e os limites para sua paisagem teorizante ou
            conceitual já foram definidos, seguem algumas as regras do nosso
            jogo.
          </p>
          <p>
            <strong> Regras de Enquadramento e Submissão de Trabalhos </strong>
          </p>
          <ol>
            <li>
              Você deverá se inscrever no VI SEMFEP através da página do Sistema
              de{' '}
              <a href="http://www.semfep.ufba.br/ " target="_blank">
                Gerenciamento de Eventos da UFBA - GERE
              </a>
              ;
            </li>
            <li>
              Os trabalhos poderão ser apresentados tanto no formato de áudio,
              como vídeo - à escolha de seus autores -, com suas teorizações,
              conceituações ou expressões poéticas, sobre o Frame que escolheu,
              conforme <strong>orientações previstas nos itens 5 e 6</strong> a
              seguir;
            </li>

            <li>
              No formulário de submissão do trabalho no GERE, deverá constar:
              <ol type="a">
                <li>
                  Um pequeno texto de no mínimo 100 palavras, e no máximo 150
                  palavras, para nos contar um pouco sobre as intenções contidas
                  no áudio ou o vídeo que você enviou;
                </li>
                <li>
                  O link do áudio ou vídeo deve ser inserido no campo adequado
                  no formulário de submissão, e infelizmente não poderemos nos
                  responsabilizar por problemas técnicos seja no ato do envio,
                  ou em casos de arquivos corrompidos;
                </li>
              </ol>
            </li>

            <li>
              Aqueles/as que optarem pela apresentação em áudio, deverão enviar
              um arquivo de áudio de no máximo 03 (três) minutos, ÚNICA e
              exclusivamente para a plataforma{' '}
              <a href="https://soundcloud.com/" target="_blank">
                SoundCloud
              </a>
              , e disponibilizar o link do seu trabalho na plataforma, no local
              indicado no formulário de inscrição no GERE. Existem muitos
              aplicativos gratuitos tanto para celulares (<i>smartphones</i>),
              quanto para notebooks e computadores;
            </li>
            <li>
              Aqueles/as que optarem pela apresentação em vídeo, deverão enviar
              um arquivo de vídeo de no máximo 05 (cinco) minutos, ÚNICA e
              exclusivamente para a plataforma{' '}
              <a href="https://www.youtube.com/" target="_blank">
                YouTube
              </a>
              , e disponibilizar o link do seu trabalho na plataforma, no local
              indicado no formulário de inscrição no GERE. A maioria dos
              celulares (smartphones), gravam vídeos compatíveis com o YouTube;
            </li>
            <li>
              Aqueles/as autores que tiverem seus trabalhos aprovados no evento,
              deverão enviar até o dia <strong>14 de novembro de 2021</strong>,
              seus arquivos de áudio e vídeo originais, para o e-mail:{' '}
              <a href="mailto:plataformafep@gmail.com">
                plataformafep@gmail.com
              </a>
              . Esse prazo é final e não será estendido.
            </li>
            <li>
              As produções, sejam os que foram submetidos em áudio e vídeo,
              quanto os escritos no formulário,{' '}
              <strong>devem ser totalmente originais</strong>, e não terem sido
              comunicados em outros eventos ou publicações. As apreciações serão
              realizadas com base nas referências que implicam o enquadramento
              de seus trabalhos;
            </li>
            <li>
              Como os <i>Frames</i> que foram delimitados por ocasião do VI
              SEMFEP, não estão vinculados a específicas áreas de conhecimento,
              em qualquer um desses enquadramentos (Frames), você poderá
              submeter trabalhos em qualquer área, categorias ou paradigmas de
              pesquisa em educação e adjacências com a qual tenha afinidade;
            </li>
            <li>
              O que a equipe de apreciação de trabalhos espera, é que do lugar
              onde sua pesquisa/problematização atualmente se situa, você possa
              em seus textos se expressar de modo a problematizar o <i>Frame</i>{' '}
              que escolheu, sem configurar uma tomada de posição adesista e
              laudatória;
            </li>
            <li>
              Serão aceitos trabalhos na seguinte condição de autoralidade: até
              01 (Um) trabalho como autor principal; e até 01 (Um) trabalho como
              autor secundário;
            </li>
            <li>
              Ao submeter o trabalho, você concorda com a divulgação dos seus
              áudios, vídeos e textos através de quaisquer plataformas digitais
              escolhidas oportunamente pela produção do VI SEMFEP.
            </li>
          </ol>
          <p>
            BAIXE AS REGRAS DE ENQUADRAMENTO E SUBMISSÃO DE TRABALHOS, QUE CONTA
            COM UMA TABELA COMPARATIVA DOS FRAMES EM FORMATO PDF{' '}
            <strong>CLICANDO AQUI</strong>.
          </p>
        </section>
      </div>
    );
  }
}

export default FrameWork;
