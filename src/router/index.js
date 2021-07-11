import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home";
import Goods from "@/views/Goods";
import List from "@/views/List";
import Cart from "@/views/Cart";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/goods/:id",
    name: "Goods",
    component: Goods,
  },
  {
    path: "/goods",
    name: "List",
    component: List,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
