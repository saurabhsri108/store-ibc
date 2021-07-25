import { useDispatch, useSelector } from "react-redux"
import { AccountContainer } from "../components/UserAccount/Account.styles"
import { useEffect } from "react"
import { getProfile } from "../redux/action-creators/user-action-creator"
import Message from "../components/Messages/Message.component"
import Loader from "../components/Loading/Loading.component"
import AsideCustomerAccount from "../components/UserAccount/CustomerAccount/AsideCustomerAccount.component"
import DashboardArea from "../components/UserAccount/DashboardArea.component"
import AsideAdminAccount from "../components/UserAccount/AdminAccount/AsideAdminAccount.component"

const Account = ({ location, history }) => {
  const pathname = location.pathname
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.userLogin)
  const { loadingProfile, userDetails, errorProfile } = useSelector(
    (state) => state.userProfile
  )
  useEffect(() => {
    if (!userInfo) {
      history.push("/auth/sign-in")
    } else {
      if (!userDetails) {
        dispatch(getProfile("profile"))
      }
    }
  }, [dispatch, userDetails, userInfo, history])

  if (!userInfo) return <Loader />

  if (loadingProfile) return <Loader />

  if (errorProfile)
    return (
      <Message variant="error" margin="2rem auto">
        {errorProfile}
      </Message>
    )

  if (userDetails?.email !== "admin001@storejs.com")
    return (
      <AccountContainer>
        <AsideCustomerAccount pathname={pathname} userDetails={userDetails} />
        <DashboardArea pathname={pathname} role="customer" />
      </AccountContainer>
    )

  return (
    <AccountContainer>
      <AsideAdminAccount pathname={pathname} userDetails={userDetails} />
      <DashboardArea pathname={pathname} role="admin" />
    </AccountContainer>
  )
}

export default Account
