"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderCRUDService = void 0;
const db_1 = require("../../firebase/db");
const enum_1 = require("../../utils/enum");
const order_entitie_1 = require("./entitie/order.entitie");
const order_service_1 = require("./order.service");
const dbFirestore = new db_1.DbFirestore(enum_1.CollectionsName.orderColl);
const orderEntitie = new order_entitie_1.OrderEntitie();
const orderCRUDService = new order_service_1.OrderCRUDService(orderEntitie, dbFirestore);
exports.orderCRUDService = orderCRUDService;