import { cookies } from "next/headers"

const LocalPage = () => {
    const cookieStore = cookies()
    const level = cookieStore.get('practiceLevelpracticeAddition')?.value
    
  return (
    <div>
      <h1>Local Page</h1>
      <p>Level cookie: {level}</p>
    </div>
  )
}
export default LocalPage