
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { AvatarImage, Avatar } from "@/components/ui/avatar"

export function Secondary() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <div className="w-60 bg-white p-4">
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">InnovateHub</h2>
              <SettingsIcon className="text-gray-400" />
            </div>
            <div className="mt-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Design team</span>
                <Badge variant="secondary">+1</Badge>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-sm font-medium">Marketing Team</span>
                <Badge variant="secondary">+2</Badge>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-sm font-medium">Development Team</span>
                <Badge variant="secondary">+3</Badge>
              </div>
              <Button className="mt-2" variant="ghost">
                Create a team
              </Button>
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <Button className="justify-start text-left" variant="ghost">
              Products
            </Button>
            <Button className="justify-start text-left" variant="ghost">
              Roadmap
            </Button>
            <Button className="justify-start text-left" variant="ghost">
              Feedback
            </Button>
            <Button className="justify-start text-left" variant="ghost">
              Performance
            </Button>
            <Button className="justify-start text-left" variant="ghost">
              Team
            </Button>
            <Button className="justify-start text-left" variant="ghost">
              Analytics
            </Button>
            <Button className="mt-2" variant="ghost">
              Add new sub
            </Button>
          </div>
          <div className="flex flex-col space-y-1 mt-4">
            <Button className="justify-start text-left" variant="ghost">
              Sales
            </Button>
            <Button className="justify-start text-left" variant="ghost">
              Design
            </Button>
            <Button className="justify-start text-left" variant="ghost">
              Office
            </Button>
            <Button className="justify-start text-left" variant="ghost">
              Legal
            </Button>
          </div>
          <div className="mt-4">
            <Button variant="ghost">Invite teammates</Button>
            <Button className="mt-2" variant="ghost">
              Help and first steps
            </Button>
            <Button className="mt-2" variant="outline">
              Add billing
            </Button>
          </div>
        </div>
        <div className="flex-1 p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold">Products</h1>
          
          </div>
          <div className="bg-white  shadow rounded-lg p-4">
            <div className="flex justify-between">
          <div className="flex space-x-4 mb-4">
            <Button variant="outline" className="rounded-lg">All brands</Button>
            <Button variant="outline">Desk</Button>
            <Button variant="outline">Tags</Button>
            <Button variant="outline">
              <ListOrderedIcon className="text-gray-400" />
              Sort
            </Button>
            <Button variant="outline">
              <FilterIcon className="text-gray-400" />
              Filter
            </Button>


          </div>
          
          <div className="flex space-x-2">
              <Button variant="outline">Meeting</Button>
              <Button variant="outline">Import / Export</Button>
            </div></div>
            <Table className="border-slate-300">
              <TableHeader>
                <TableRow>
                  <TableHead>Brand</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Members</TableHead>
                  <TableHead>Categories</TableHead>
                  <TableHead>Tags</TableHead>
                  <TableHead>Next meeting</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Avatar>
                        <AvatarImage alt="Brand Logo" src="/placeholder.svg?height=24&width=24" />
                      </Avatar>
                      <span>Wix</span>
                    </div>
                  </TableCell>
                  <TableCell>Develop a personalized fitness platform</TableCell>
                  <TableCell>
                    <div className="flex -space-x-2">
                      <Avatar>
                        <AvatarImage alt="Member" src="/placeholder.svg?height=24&width=24" />
                      </Avatar>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge>Automation</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">#DigitalTransformation</Badge>
                  </TableCell>
                  <TableCell>in 30 minutes</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div>
              <Button variant="outline">3 selected</Button>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline">Archive</Button>
              <Button variant="outline">Delete</Button>
              <Button variant="outline">More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


function SettingsIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function ListOrderedIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  )
}


function FilterIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}
