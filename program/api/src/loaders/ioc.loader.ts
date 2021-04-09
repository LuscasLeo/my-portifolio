import { useContainer as userRoutingContainer } from 'routing-controllers';
import { Container as TypeDIContainer } from 'typedi';

export default async function loadIoC() {
  userRoutingContainer(TypeDIContainer);
}
