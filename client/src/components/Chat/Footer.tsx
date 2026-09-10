import { memo } from 'react';

type FooterProps = {
  className?: string;
};

function Footer(_props: FooterProps) {
  return null;
}

const MemoizedFooter = memo(Footer);
MemoizedFooter.displayName = 'Footer';

export default MemoizedFooter;
