import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log('clicked')}>
      {' '}
      mand{' '}
    </ChildAsFC>
  );
};

export default Parent;
