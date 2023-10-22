import { updateOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
import { useFetcher } from 'react-router-dom';

export default function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request, params }) {
  const data = { priority: true };

  await updateOrder(params.orderId, data);
  return null;
}
