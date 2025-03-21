import { createRoot } from 'react-dom/client';
import Panel from '@pages/panel/Panel';
import '@assets/styles/tailwind.css';

function init() {
  const rootContainer = document.querySelector("#__root");
  if (!rootContainer) throw new Error("Can't find Panel root element");
  const root = createRoot(rootContainer);
  root.render(<Panel summary={undefined} isLoading={false} onClose={function (): void {
    throw new Error('Function not implemented.');
  } } errorMessage={''} />);
}

init();
