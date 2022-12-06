// build - next:
import { useLogger } from '../lib/logger';
import { DataProps } from '../lib/data-fetcher';
import {useState} from 'react';

export { getServerSideProps } from '../lib/data-fetcher';

// rendering - react:
const Home = ({ projects, works, articles }: DataProps) => {
  const logger = useLogger();
  logger.info({ projects, works, articles }, 'Loaded documents');

  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
    <div className='flex'>
      <div className={`${isSelected ? 'flex-auto' : 'flex-1'} bg-blue-600 w-64`} onClick={() => setIsSelected(!isSelected)}>
        This is my stuff
      </div>

    </div>
    </>
  );
};

export default Home;
