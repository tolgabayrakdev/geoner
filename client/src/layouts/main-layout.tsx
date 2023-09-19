import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <section>
      <h1>Main Layout</h1>
      <Outlet />
    </section>
  );
}
