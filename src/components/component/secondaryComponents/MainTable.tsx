import React from 'react'
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { MessagesSquare, Plus } from 'lucide-react';
import { Checkbox } from "../../ui/checkbox";
import Tooltip from '@/components/ui/tooltip';
import { Badge } from "@/components/ui/badge";


const MainTable = () => {
  return (
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
  )
}

export default MainTable