import { Route, Switch } from "react-router-dom"
import Card from "../Card/Card.component"
import OrdersSection from "./CustomerAccount/OrdersSection.component"
import CartSection from "./CustomerAccount/CartSection.component"
import WishlistSection from "./CustomerAccount/WishlistSection.component"
import ResetPassword from "./CustomerAccount/ResetPassword.component"
import CustomerAccount from "./CustomerAccount/CustomerAccount.component"
import AdminAccount from "./AdminAccount/AdminAccount.component"
import AdminProductsSection from "./AdminAccount/AdminProductsSection.component"
import AdminOrdersSection from "./AdminAccount/AdminOrdersSection.component"
import AdminUsersSection from "./AdminAccount/AdminUsersSection.component"

const DashboardArea = ({ pathname, role }) => {
  if (role === "admin") {
    return (
      <Card className="dashboard-area">
        <h1 className="dashboard-heading">
          {pathname === "/user/reset"
            ? "Change Password"
            : `${pathname.split("/")[2]}`}
        </h1>
        <Switch>
          <Route path="/user/account/" component={AdminAccount} />
          <Route path="/user/orders" component={AdminOrdersSection} />
          <Route path="/user/products" component={AdminProductsSection} />
          <Route path="/user/users" component={AdminUsersSection} />
          <Route path="/user/reset" component={ResetPassword} />
        </Switch>
      </Card>
    )
  }

  if (role === "customer")
    return (
      <Card className="dashboard-area">
        <h1 className="dashboard-heading">
          {pathname === "/user/reset"
            ? "Change Password"
            : `My ${pathname.split("/")[2]}`}
        </h1>
        <Switch>
          <Route path="/user/account/" component={CustomerAccount} />
          <Route path="/user/orders" component={OrdersSection} />
          <Route path="/user/cart" component={CartSection} />
          <Route path="/user/wishlist" component={WishlistSection} />
          <Route path="/user/reset" component={ResetPassword} />
        </Switch>
      </Card>
    )
}

export default DashboardArea
