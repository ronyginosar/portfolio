import { useLogger } from '../lib/logger';
import { DataProps } from '../lib/data-fetcher';

export { getServerSideProps } from '../lib/data-fetcher';

const Home = ({ projects, works, articles }: DataProps) => {
  const logger = useLogger();
  logger.info({ projects, works, articles }, 'Loaded documents');

  return (
    <div className="mainContainer">
      <div className="section one">
        <div className="tabTitle">Resume</div>
        <div className="tabSection"></div>
      </div>
      <div className="section two">
        <div className="tabTitle">Talks, Shows & Awards</div>
        <div className="tabSection"></div>
      </div>
      <div className="section three">
        <div className="tabTitle">ResearCh & PubliCations</div>
        <div className="tabSection"></div>
      </div>
      <div className="section four active">
        <div className="tabTitle">Works</div>
        <div className="tabSection"></div>
      </div>
      <div className="section five">
        <div className="tabTitle">Info</div>
        <div className="tabSection">
          <div className="bioclassName" id="bio">
            {/* <script type="text/javascript">$("#bio").load("texts/bio.txt")</script> */}
          </div>
          <div className="bioclassName" id="bio_links">
            {/* <script type="text/javascript">$("#bio_links").load("texts/bio_links.txt")</script> */}
          </div>
          <h3>colophon</h3>
          <div className="bioclassName" id="bio_colophon">
            <div className="bio_colophon_main">This website is written as an opensource code</div>
            <a className="bio_colophon_sub" href="https://www.github.com/ronyginosar" target="_blank" rel="noreferrer">
              {' '}
              link{' '}
            </a>
            <div className="bio_colophon_main">Fonts in use from Primary Foundry Library are Open Font License</div>
            <a className="bio_colophon_sub" href="https://primary-foundry.com/library/" target="_blank" rel="noreferrer">
              {' '}
              primary-foundry.com/library{' '}
            </a>
            <div className="bio_colophon_main">
              Lincoln by
              <a href="https://colophon.info/" target="_blank" rel="noreferrer">
                David Bennewith
              </a>
            </div>
            <div className="bio_colophon_sub">
              Lincoln/MITRE fonts are studies of the typographic system designed by MIT Lincoln Laboratory for use in
              various displays on the early warning air defense computer network SAGE
            </div>
            <div className="bio_colophon_main">
              Sprat by
              <a href="https://www.instagram.com/nkh.otf/" target="_blank" rel="noreferrer">
                Ethan Nakache
              </a>
            </div>
            <div className="bio_colophon_sub">hi</div>
            <div className="bio_colophon_main">© RONY GINOSAR 2022</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
