import { useRouter } from "next/router"

const Profile = () => {
    const router = useRouter();
    const { name } = router.query;
    <div>Hi { name }!</div>
}

export default Profile