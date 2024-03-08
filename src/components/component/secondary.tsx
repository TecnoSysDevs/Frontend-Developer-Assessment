import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { Archive, Trash2, X } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import Tooltip from "../ui/tooltip";
import { Code, CommandIcon, Folder, LayoutIcon, PenTool, Plus, PlusSquare } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { FaPlus } from "react-icons/fa6";
import { MessagesSquare, Settings } from "lucide-react";
import { FaCaretUp } from "react-icons/fa6";

export function Secondary() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <div className="w-60 bg-white p-4">
          <div className="mb-4">
            <div className="flex items-center justify-between pb-5">
            <CommandIcon />

              <div >
                <p className="text-slate-400">NIC</p>
              <h2 className="text-lg font-semibold">InnovateHub</h2>


              </div>
              <SettingsIcon className="text-gray-400" />
            </div>
            <div className="mt-2 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Design team</span>
                <Badge variant="secondary">
                  <CommandIcon width={12} height={12} />
                  +1
                </Badge>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-sm font-medium">Marketing Team</span>
                <Badge variant="secondary">
                  <CommandIcon width={12} height={12} />
                  +2
                </Badge>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-sm font-medium">Development Team</span>
                <Badge variant="secondary">
                  <CommandIcon width={12} height={12} />
                  +3
                </Badge>
              </div>
              <Button className="mt-2" variant="ghost">
              <PlusSquare className="text-slate-600" /> Create a team
              </Button>
            </div>
          </div>
          <div className="flex justify-between items-center">
          <Button className="text-slate-500" variant="ghost">
            FOLDERS
              </Button>
              <Plus className=" text-slate-500" width={15} height={15} />
          </div>
        

          <div className="flex flex-col space-y-1">
          <div className="flex justify-between items-center">
          <Button  variant="ghost" className="flex gap-1">
          <Folder width={15} height={15} />
            Products
              </Button>
              <FaCaretUp  width={15} height={15} />
          </div>
            
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
            <div className="flex gap-3">
              <div className="relative">
                <input
                  className="appearance-none border-2  pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-xl  w-full py-2  text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Search for..."
                />

                <div className="absolute left-0 inset-y-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
              <Button variant="outline">
                <MessagesSquare />
              </Button>
              <Button variant="outline">
                <Settings />
              </Button>
            </div>
          </div>
          <div className="bg-white  shadow rounded-lg p-4">
            <div className="flex justify-between">
              <div className="flex space-x-4 mb-4">
                <Button variant="outline" className="rounded-xl">
                  All brands
                </Button>
                <Button variant="outline" className="rounded-xl">
                  Desk
                </Button>
                <Button variant="outline" className="rounded-xl">
                  Tags
                </Button>
                <Button variant="outline" className="rounded-xl">
                  <ListOrderedIcon className="text-gray-400" />
                  Sort
                </Button>
                <Button variant="outline" className="rounded-xl">
                  <FilterIcon className="text-gray-400" />
                  Filter
                </Button>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline">Meeting</Button>
                <Button variant="outline">Import / Export</Button>
              </div>
            </div>
            <Table className="border-slate-300">
              <TableHeader>
                <TableRow>
                  <TableHead className="flex items-center justify-between">
                    Brand <Plus />
                  </TableHead>
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
                    <div className="flex justify-between  space-x-24">
                      <div className="flex items-center gap-2">
                        <Checkbox id="terms" />

                        <img
                          alt="Brand Logo"
                          src="https://cdn-icons-png.flaticon.com/512/5968/5968770.png"
                          width={30}
                          height={30}
                          className="rounded-lg"
                        />
                        <span>Wix</span>
                        {/* <div className="flex items-center space-x-2">
                      <Avatar>
                        <AvatarImage
                          alt="Brand Logo"
                          src="/placeholder.svg?height=24&width=24"
                        />
                      </Avatar>
                      <span>Wix</span>

                      // </div> */}
                      </div>
                      <div className="flex gap-2">
                        <MessagesSquare /> <span className="text-lg">2</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>Develop a personalized fitness platform</TableCell>
                  <TableCell>
                    <Tooltip />
                  </TableCell>
                  <TableCell>
                    <Badge className="w-20 flex justify-center items-center rounded-none h-4 text-violet-800 bg-slate-300">
                      Automation
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">#DigitalTransformation</Badge>
                  </TableCell>
                  <TableCell>in 30 minutes</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-center mt-4">
            <div className="flex items-center border-b border-gray-300 rounded-lg p-4">
              <Button><span className="bg-black text-white p-1 px-2 rounded-lg mr-1  font-semibold">3</span> selected</Button>
              <Button variant="outline" className="ml-2 p-1 font-semibold ">
              <span className="pr-1.5"><Archive /></span>Archive
              </Button>
              <Button variant="outline" className="ml-2 text-red-800 font-semibold">
              <span className="pr-1.5"><Trash2 /> </span>Delete
              </Button>
              <Button variant="outline" className="ml-2 p-1 font-semibold">
                More<span className="text-gray-500 pr-1.5 pl-1.5 pb-0.5 " ><FaCaretDown /></span>
              </Button>
              <Button className="ml-2 p-1 font-semibold text-gray-400">
              <X />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsIcon(props: any) {
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
  );
}

function ListOrderedIcon(props: any) {
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
  );
}

function FilterIcon(props: any) {
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
  );
}
