import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./components/ui/card"

function App() {
  return (
    <Card className="dark:bg-green-500">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}

export default App
