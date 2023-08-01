import { ReactFragment, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type OCLinkProps = {
  to: string;
  children: ReactNode | ReactFragment;
};

export function OCLink({ to, children }: OCLinkProps) {
  return <NavLink to={to}>{children}</NavLink>;
}
