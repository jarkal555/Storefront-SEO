import Link from 'next/link';
import { ShopService, GetShopQuery } from '@app/services/shop.service';

interface Props {
  data: GetShopQuery;
}

Page.getInitialProps = async (): Promise<Props> => {
  return { data: await ShopService.getData() };
};

export default function Page({ data }: Props) {
  return (
    <div>
      <h1>{data.shop.name}</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/products">
        <a>Products</a>
      </Link>
    </div>
  );
}
