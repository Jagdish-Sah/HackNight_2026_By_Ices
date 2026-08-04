import { useEffect } from "react";
import {
  BarChart3,
  CheckCircle,
  CheckCircle2,
  Clock,
  DollarSign,
  Eye,
  HelpCircle,
  Home,
  Inbox,
  Landmark,
  LoaderCircle,
  MessageSquare,
  Send,
  Shield,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function App() {
  return (
    <div>
      <div className="bg-white text-zinc-950 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <div className="bg-white flex mx-auto flex-col w-285 h-239 overflow-hidden">
          <header className="border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid px-8 py-4">
            <div className="flex justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="size-10 shadow-sm rounded-xl bg-[#2b7fff] text-blue-50 flex justify-center items-center">
                  <Landmark className="size-5" />
                </div>
                <div className="leading-tight flex flex-col">
                  <span className="font-bold text-sm leading-5">
                    Good Governance Portal
                  </span>
                  <span className="text-[#71717b] text-xs leading-4">
                    Citizen Services
                  </span>
                </div>
              </div>
              <nav className="flex justify-start items-center gap-6">
                <a className="text-[#71717b] text-xs leading-4 flex items-center gap-1">
                  <Home className="size-4" />
                  Home
                </a>
                <a className="text-[#71717b] text-xs leading-4 flex items-center gap-1">
                  <DollarSign className="size-4" />
                  {`Budget & Expenditure`}
                </a>
                <a className="text-[#71717b] text-xs leading-4 flex items-center gap-1">
                  <Eye className="size-4" />
                  Transparency
                </a>
                <a className="text-[#71717b] text-xs leading-4 flex items-center gap-1">
                  <Users className="size-4" />
                  Public Figures
                </a>
                <a className="text-[#71717b] text-xs leading-4 flex items-center gap-1">
                  <Shield className="size-4" />
                  Central KYC
                </a>
                <a className="font-semibold text-[#2b7fff] text-xs leading-4 border-[#2b7fff] border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex pb-0.5 items-center gap-1">
                  <MessageSquare className="size-4" />
                  Complaints
                </a>
                <a className="text-[#71717b] text-xs leading-4 flex items-center gap-1">
                  <CheckCircle className="size-4" />
                  Accountability
                </a>
                <a className="text-[#71717b] text-xs leading-4 flex items-center gap-1">
                  <HelpCircle className="size-4" />
                  FAQ
                </a>
              </nav>
            </div>
          </header>
          <main className="flex p-8 flex-col flex-1">
            <div className="flex mb-6 flex-col gap-2">
              <div className="flex items-center gap-2">
                <Inbox className="size-6 text-[#2b7fff]" />
                <h1 className="font-bold text-2xl leading-8">{`Complaint & Suggestion Box`}</h1>
              </div>
              <p className="max-w-3xl text-[#71717b] text-sm leading-6">
                Your voice shapes better governance. Share complaints or
                suggestions anonymously and help us build a more transparent,
                accountable public service. No personal identity details are
                required and submissions are reviewed by our citizen response
                team.
              </p>
            </div>
            <div className="grid grid-cols-[minmax(0,1fr)_340px] flex-1 gap-6">
              <Card className="p-6 gap-6">
                <CardHeader className="p-0 gap-1">
                  <CardTitle className="text-lg leading-7">
                    Submit Your Feedback Anonymously
                  </CardTitle>
                  <CardDescription className="text-[#71717b] text-sm leading-5">
                    Identity details are optional and not required to submit a
                    complaint or suggestion.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <Label className="font-medium text-xs leading-4">
                        Category *
                      </Label>
                      <Select defaultValue="complaint">
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="complaint">Complaint</SelectItem>
                          <SelectItem value="suggestion">Suggestion</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="subject"
                        className="font-medium text-xs leading-4"
                      >
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        placeholder="Brief summary"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="message"
                      className="font-medium text-xs leading-4"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      className="min-h-40 resize-none"
                      placeholder="Describe your complaint or suggestion in detail..."
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="notify" defaultChecked={true} />
                    <Label
                      htmlFor="notify"
                      className="font-normal text-[#71717b] text-xs leading-4"
                    >
                      Notify me about the status of my submission
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="agree" defaultChecked={false} />
                    <Label
                      htmlFor="agree"
                      className="font-normal text-[#71717b] text-xs leading-4"
                    >
                      I confirm the information provided is accurate *
                    </Label>
                  </div>
                </CardContent>
                <CardFooter className="flex p-0 justify-between items-center">
                  <p className="text-[#71717b] text-xs leading-4">
                    Average response time: 3 business days
                  </p>
                  <Button className="bg-[#2b7fff] text-blue-50 px-8">
                    <Send className="size-4" />
                    Submit
                  </Button>
                </CardFooter>
              </Card>
              <div className="flex flex-col gap-6">
                <Card className="p-6 gap-4">
                  <CardHeader className="flex p-0 flex-row justify-between items-center gap-2">
                    <CardTitle className="text-base leading-6">
                      Recent Statuses
                    </CardTitle>
                    <Badge className="bg-zinc-100 text-zinc-950">Live</Badge>
                  </CardHeader>
                  <CardContent className="p-0 gap-3">
                    <div className="rounded-xl border-zinc-200 border-1 border-solid flex p-4 items-start gap-3">
                      <div className="size-9 shrink-0 rounded-full bg-[#2b7fff]/10 text-[#2b7fff] flex justify-center items-center">
                        <Clock className="size-4" />
                      </div>
                      <div className="flex flex-col flex-1 gap-1">
                        <div className="flex justify-between items-center gap-3">
                          <span className="font-medium text-sm leading-5">
                            Water Supply Delay
                          </span>
                          <Badge className="bg-[#2b7fff]/15 text-[#2b7fff]">
                            Pending
                          </Badge>
                        </div>
                        <span className="text-[#71717b] text-xs leading-4">
                          Ref #GC-2041 · 2h ago
                        </span>
                      </div>
                    </div>
                    <div className="rounded-xl border-zinc-200 border-1 border-solid flex p-4 items-start gap-3">
                      <div className="size-9 shrink-0 rounded-full bg-[#2b7fff]/10 text-[#2b7fff] flex justify-center items-center">
                        <LoaderCircle className="size-4" />
                      </div>
                      <div className="flex flex-col flex-1 gap-1">
                        <div className="flex justify-between items-center gap-3">
                          <span className="font-medium text-sm leading-5">
                            Road Repair Request
                          </span>
                          <Badge className="bg-[#2b7fff] text-blue-50">
                            In Progress
                          </Badge>
                        </div>
                        <span className="text-[#71717b] text-xs leading-4">
                          Ref #GC-2038 · 1d ago
                        </span>
                      </div>
                    </div>
                    <div className="rounded-xl border-zinc-200 border-1 border-solid flex p-4 items-start gap-3">
                      <div className="size-9 shrink-0 rounded-full bg-[#2b7fff]/10 text-[#2b7fff] flex justify-center items-center">
                        <CheckCircle2 className="size-4" />
                      </div>
                      <div className="flex flex-col flex-1 gap-1">
                        <div className="flex justify-between items-center gap-3">
                          <span className="font-medium text-sm leading-5">
                            Streetlight Suggestion
                          </span>
                          <Badge className="bg-[#2b7fff]/80 text-blue-50">
                            Resolved
                          </Badge>
                        </div>
                        <span className="text-[#71717b] text-xs leading-4">
                          Ref #GC-2030 · 3d ago
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="p-6 gap-4">
                  <CardContent className="p-0 gap-3">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="size-4 text-[#2b7fff]" />
                      <span className="font-semibold text-sm leading-5">
                        This Month
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="rounded-xl bg-zinc-100 flex p-3 flex-col items-center gap-1">
                        <span className="font-bold text-[#2b7fff] text-lg leading-7">
                          128
                        </span>
                        <span className="text-[#71717b] text-[10px]">
                          Received
                        </span>
                      </div>
                      <div className="rounded-xl bg-zinc-100 flex p-3 flex-col items-center gap-1">
                        <span className="font-bold text-[#2b7fff] text-lg leading-7">
                          96
                        </span>
                        <span className="text-[#71717b] text-[10px]">
                          Resolved
                        </span>
                      </div>
                      <div className="rounded-xl bg-zinc-100 flex p-3 flex-col items-center gap-1">
                        <span className="font-bold text-[#2b7fff] text-lg leading-7">
                          2.4d
                        </span>
                        <span className="text-[#71717b] text-[10px]">
                          Avg Time
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
          <footer className="border-zinc-200 border-t-1 border-r-0 border-b-0 border-l-0 border-solid px-8 py-6">
            <div className="flex justify-between items-start gap-8">
              <div className="max-w-xs flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="size-7 rounded-lg bg-[#2b7fff] text-blue-50 flex justify-center items-center">
                    <Landmark className="size-4" />
                  </div>
                  <span className="font-bold text-sm leading-5">
                    Good Governance Portal
                  </span>
                </div>
                <p className="text-[#71717b] text-xs leading-4">
                  Committed to transparency, accountability and citizen-first
                  public service.
                </p>
              </div>
              <div className="flex gap-12">
                <div className="flex flex-col gap-2">
                  <span className="font-semibold text-xs leading-4">
                    Governance
                  </span>
                  <a className="text-[#71717b] text-xs leading-4">{`Budget & Expenditure`}</a>
                  <a className="text-[#71717b] text-xs leading-4">
                    Transparency
                  </a>
                  <a className="text-[#71717b] text-xs leading-4">
                    Accountability
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-semibold text-xs leading-4">
                    Support
                  </span>
                  <a className="text-[#71717b] text-xs leading-4">FAQ</a>
                  <a className="text-[#71717b] text-xs leading-4">Complaints</a>
                  <a className="text-[#71717b] text-xs leading-4">
                    Central KYC
                  </a>
                </div>
              </div>
            </div>
            <div className="border-zinc-200 border-t-1 border-r-0 border-b-0 border-l-0 border-solid flex mt-4 pt-4 justify-between items-center">
              <span className="text-[#71717b] text-xs leading-4">
                © 2025 Good Governance Portal. All rights reserved.
              </span>
              <div className="flex items-center gap-3">
                <a className="text-[#71717b] text-xs leading-4">Privacy</a>
                <a className="text-[#71717b] text-xs leading-4">Terms</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
