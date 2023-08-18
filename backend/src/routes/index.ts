import { Express, Router } from 'express';
import { di } from '../di';
import TestController from '../controllers/test.controller';
import TestService from '../services/test.service';
import PromotionController from '../controllers/payment/promotions/promotion.controller';
import PromotionService from '../services/payment/promotions/promotion.service';
import CreditCardPaymentMethodController from '../controllers/payment/paymentMethods/CreditCardPaymentMethod.controller';
import CreditCardPaymentMethodService from '../services/payment/paymentMethods/CreditCardPaymentMethod.service';
import GooglePayPaymentMethodController from '../controllers/payment/paymentMethods/GooglePayPaymentMethod.controller';
import GooglePayPaymentMethodService from '../services/payment/paymentMethods/GooglePayPaymentMethod.service';
import PixPaymentMethodController from '../controllers/payment/paymentMethods/PixPaymentMethod.controller';
import PixPaymentMethodService from '../services/payment/paymentMethods/PixPaymentMethod.service';
import CashPaymentMethodController from '../controllers/payment/paymentMethods/CashPaymentMethod.controller';
import CashPaymentMethodService from '../services/payment/paymentMethods/CashPaymentMethod.service';
import PaymentMethodsController from '../controllers/payment/paymentMethods/PaymentMethods.controller';
import PaymentMethodsService from '../services/payment/paymentMethods/PaymentMethods.service';
import DeliverymanController from '../controllers/deliverymans/deliveryman.controller';
import DeliverymanService from '../services/deliverymans/deliveryman.service';
import PedidoController from '../controllers/Pedidos/pedido.controller';
import PedidoService from '../services/Pedidos/pedido.service';

const router = Router();
const prefix = '/api';

export default (app: Express) => {
  app.use(
    prefix,
    new TestController(router, di.getService(TestService)).router
  );
  app.use(
    prefix,
    new PromotionController(router, di.getService(PromotionService)).router
  );
  app.use(
    prefix,
    new CreditCardPaymentMethodController(router, di.getService(CreditCardPaymentMethodService)).router
  );
  app.use(
    prefix,
    new CashPaymentMethodController(router, di.getService(CashPaymentMethodService)).router
  );
  app.use(
    prefix,
    new PixPaymentMethodController(router, di.getService(PixPaymentMethodService)).router
  );
  app.use(
    prefix,
    new GooglePayPaymentMethodController(router, di.getService(GooglePayPaymentMethodService)).router
  );
  app.use(
    prefix,
    new PaymentMethodsController(router, di.getService(PaymentMethodsService)).router
  );
  app.use(
    prefix,
    new DeliverymanController(router, di.getService(DeliverymanService)).router
  )
  app.use(
    new PedidoController(router, di.getService(PedidoService)).router
  );
};
