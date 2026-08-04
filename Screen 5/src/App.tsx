import { useEffect } from "react";
import {
  AlertTriangle,
  Check,
  CheckCircle,
  CheckCircle2,
  DollarSign,
  Eye,
  HelpCircle,
  Home,
  Landmark,
  ListChecks,
  Loader,
  MessageSquare,
  Moon,
  RefreshCw,
  Search,
  Shield,
  Star,
  Sun,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { FallbackComponent } from "./CustomComponents";

export default function App() {
  return (
    <div>
      <div className="w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <div className="bg-white text-zinc-950 flex flex-col w-full h-fit">
          <header className="bg-white border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid w-full">
            <div className="flex px-8 py-4 justify-between items-center gap-6 w-full">
              <div className="flex items-center gap-2">
                <div className="size-9 rounded-lg bg-[#2b7fff] flex justify-center items-center">
                  <Landmark className="size-5 text-blue-50" />
                </div>
                <div className="flex flex-col">
                  <span className="leading-tight font-bold text-sm leading-5">
                    GoodGov Portal
                  </span>
                  <span className="leading-tight text-[#71717b] text-xs leading-4">{`Transparency & Accountability`}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="size-4 top-1/2 -translate-y-1/2 text-[#71717b] absolute left-2" />
                  <Input
                    placeholder="Search initiatives..."
                    className="pl-8 w-56 h-9"
                    defaultValue=""
                  />
                </div>
                <div className="rounded-full border-zinc-200 border-1 border-solid flex px-3 py-1.5 items-center gap-2">
                  <Sun className="size-4 text-[#71717b]" />
                  <Switch defaultChecked={false} />
                  <Moon className="size-4 text-[#71717b]" />
                </div>
              </div>
            </div>
            <nav className="overflow-x-auto flex px-8 justify-start items-center gap-1 w-full">
              <button className="whitespace-nowrap text-[#71717b] text-sm leading-5 flex px-3 py-2.5 items-center gap-1.5">
                <Home className="size-4" />
                Home
              </button>
              <button className="whitespace-nowrap text-[#71717b] text-sm leading-5 flex px-3 py-2.5 items-center gap-1.5">
                <DollarSign className="size-4" />
                {`Budget & Expenditure`}
              </button>
              <button className="whitespace-nowrap text-[#71717b] text-sm leading-5 flex px-3 py-2.5 items-center gap-1.5">
                <Eye className="size-4" />
                Transparency
              </button>
              <button className="whitespace-nowrap text-[#71717b] text-sm leading-5 flex px-3 py-2.5 items-center gap-1.5">
                <Users className="size-4" />
                Public Figures
              </button>
              <button className="whitespace-nowrap text-[#71717b] text-sm leading-5 flex px-3 py-2.5 items-center gap-1.5">
                <Shield className="size-4" />
                Central KYC
              </button>
              <button className="whitespace-nowrap text-[#71717b] text-sm leading-5 flex px-3 py-2.5 items-center gap-1.5">
                <MessageSquare className="size-4" />
                Complaints
              </button>
              <button className="whitespace-nowrap font-semibold text-zinc-950 text-sm leading-5 border-[#2b7fff] border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex px-3 py-2.5 items-center gap-1.5">
                <CheckCircle className="size-4 text-[#2b7fff]" />
                Accountability
              </button>
              <button className="whitespace-nowrap text-[#71717b] text-sm leading-5 flex px-3 py-2.5 items-center gap-1.5">
                <HelpCircle className="size-4" />
                FAQ
              </button>
            </nav>
          </header>
          <main className="flex px-8 py-6 flex-col flex-1 gap-6 w-full overflow-hidden">
            <div className="flex justify-between items-start gap-4">
              <div className="flex flex-col gap-1">
                <h1 className="font-bold text-2xl leading-8 tracking-tight">
                  Accountability Tracker
                </h1>
                <p className="max-w-2xl text-[#71717b] text-sm leading-5">
                  Track the progress of government promises, projects, and
                  public actions across departments — from planning through
                  delivery.
                </p>
              </div>
              <Badge className="bg-[#2b7fff]/10 text-[#2b7fff] flex px-3 py-1.5 items-center gap-1.5">
                <RefreshCw className="size-3.5" />
                Updated Feb 2025
              </Badge>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <Card className="p-5 gap-2">
                <CardHeader className="p-0 flex-row justify-between items-center gap-1">
                  <span className="text-[#71717b] text-sm leading-5">
                    Total Initiatives
                  </span>
                  <div className="size-8 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center">
                    <ListChecks className="size-4 text-[#2b7fff]" />
                  </div>
                </CardHeader>
                <CardContent className="p-0 gap-1">
                  <div className="font-bold text-3xl leading-9">148</div>
                  <span className="text-[#71717b] text-xs leading-4">
                    Across 12 departments
                  </span>
                </CardContent>
              </Card>
              <Card className="p-5 gap-2">
                <CardHeader className="p-0 flex-row justify-between items-center gap-1">
                  <span className="text-[#71717b] text-sm leading-5">
                    Completed
                  </span>
                  <div className="size-8 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center">
                    <CheckCircle2 className="size-4 text-[#2b7fff]" />
                  </div>
                </CardHeader>
                <CardContent className="p-0 gap-2">
                  <div className="font-bold text-[#2b7fff] text-3xl leading-9">
                    62%
                  </div>
                  <div className="rounded-full bg-zinc-100 w-full h-1.5 overflow-hidden">
                    <div className="w-[62%] rounded-full bg-[#2b7fff] h-full" />
                  </div>
                </CardContent>
              </Card>
              <Card className="p-5 gap-2">
                <CardHeader className="p-0 flex-row justify-between items-center gap-1">
                  <span className="text-[#71717b] text-sm leading-5">
                    Ongoing
                  </span>
                  <div className="size-8 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center">
                    <Loader className="size-4 text-[#2b7fff]" />
                  </div>
                </CardHeader>
                <CardContent className="p-0 gap-2">
                  <div className="font-bold text-3xl leading-9">27%</div>
                  <div className="rounded-full bg-zinc-100 w-full h-1.5 overflow-hidden">
                    <div className="w-[27%] rounded-full bg-[#2b7fff]/60 h-full" />
                  </div>
                </CardContent>
              </Card>
              <Card className="p-5 gap-2">
                <CardHeader className="p-0 flex-row justify-between items-center gap-1">
                  <span className="text-[#71717b] text-sm leading-5">
                    Delayed
                  </span>
                  <div className="size-8 rounded-lg bg-[#e7000b]/10 flex justify-center items-center">
                    <AlertTriangle className="size-4 text-[#e7000b]" />
                  </div>
                </CardHeader>
                <CardContent className="p-0 gap-2">
                  <div className="font-bold text-[#e7000b] text-3xl leading-9">
                    11%
                  </div>
                  <div className="rounded-full bg-zinc-100 w-full h-1.5 overflow-hidden">
                    <div className="w-[11%] rounded-full bg-[#e7000b] h-full" />
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card className="p-6 gap-4">
              <CardHeader className="p-0 flex-row justify-between items-center gap-1">
                <div className="flex flex-col gap-0.5">
                  <span className="font-semibold text-base leading-6">
                    Milestone Timeline — National Digital Infrastructure Program
                  </span>
                  <span className="text-[#71717b] text-xs leading-4">
                    5 key milestones from initiation to public rollout
                  </span>
                </div>
                <div className="text-xs leading-4 flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-[#2b7fff]" />
                    Completed
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-[#2b7fff]/50" />
                    Ongoing
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-[#71717b]/30" />
                    Planned
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0 gap-4">
                <div className="relative pt-2 w-full">
                  <div className="rounded-full bg-zinc-100 absolute inset-x-0 top-4.5 h-1.5" />
                  <div className="w-[62%] rounded-full bg-[#2b7fff] absolute left-0 top-4.5 h-1.5" />
                  <div className="relative grid grid-cols-5">
                    <div className="text-center flex flex-col items-center gap-2">
                      <span className="size-5 rounded-full bg-[#2b7fff] border-white border-4 border-solid flex justify-center items-center">
                        <Check className="size-2.5 text-blue-50" />
                      </span>
                      <span className="font-medium text-xs leading-4">
                        Approval
                      </span>
                      <Badge className="bg-[#2b7fff]/10 text-[#2b7fff] text-[10px] px-2">
                        Completed
                      </Badge>
                    </div>
                    <div className="text-center flex flex-col items-center gap-2">
                      <span className="size-5 rounded-full bg-[#2b7fff] border-white border-4 border-solid flex justify-center items-center">
                        <Check className="size-2.5 text-blue-50" />
                      </span>
                      <span className="font-medium text-xs leading-4">
                        Procurement
                      </span>
                      <Badge className="bg-[#2b7fff]/10 text-[#2b7fff] text-[10px] px-2">
                        Completed
                      </Badge>
                    </div>
                    <div className="text-center flex flex-col items-center gap-2">
                      <span className="size-5 rounded-full bg-[#2b7fff]/50 border-white border-4 border-solid flex justify-center items-center">
                        <Loader className="size-2.5 text-blue-50" />
                      </span>
                      <span className="font-medium text-xs leading-4">
                        Deployment
                      </span>
                      <Badge className="bg-[#2b7fff]/15 text-[#2b7fff] text-[10px] px-2">
                        Ongoing
                      </Badge>
                    </div>
                    <div className="text-center flex flex-col items-center gap-2">
                      <span className="size-5 rounded-full bg-[#71717b]/30 border-white border-4 border-solid" />
                      <span className="font-medium text-[#71717b] text-xs leading-4">
                        Testing
                      </span>
                      <Badge className="bg-zinc-100 text-[#71717b] text-[10px] px-2">
                        Planned
                      </Badge>
                    </div>
                    <div className="text-center flex flex-col items-center gap-2">
                      <span className="size-5 rounded-full bg-[#71717b]/30 border-white border-4 border-solid" />
                      <span className="font-medium text-[#71717b] text-xs leading-4">
                        Public Rollout
                      </span>
                      <Badge className="bg-zinc-100 text-[#71717b] text-[10px] px-2">
                        Planned
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6 gap-4">
              <CardHeader className="p-0 flex-row flex-wrap justify-between items-center gap-3">
                <span className="font-semibold text-base leading-6">
                  Tracked Initiatives
                </span>
                <div className="flex items-center gap-3">
                  <Tabs defaultValue="all">
                    <TabsList>
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="completed">Completed</TabsTrigger>
                      <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
                      <TabsTrigger value="planned">Planned</TabsTrigger>
                    </TabsList>
                  </Tabs>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-44 h-9">
                      <SelectValue placeholder="Department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Departments</SelectItem>
                      <SelectItem value="health">Health</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="infra">Infrastructure</SelectItem>
                      <SelectItem value="digital">Digital Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent className="p-0 gap-0">
                <div className="grid grid-cols-[auto_2fr_1.3fr_1fr_1.1fr_auto] font-medium uppercase text-[#71717b] text-xs leading-4 tracking-wide border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid px-3 py-2.5 items-center gap-3 w-full">
                  <span />
                  <span>Initiative</span>
                  <span>Responsible Dept.</span>
                  <span>Deadline</span>
                  <span>Status</span>
                  <span>Progress</span>
                </div>
                <div className="grid grid-cols-[auto_2fr_1.3fr_1fr_1.1fr_auto] text-sm leading-5 border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid p-3 items-center gap-3 w-full">
                  <button>
                    <Star />
                  </button>
                  <span className="font-medium">
                    Universal Health Coverage Expansion
                  </span>
                  <span className="text-[#71717b]">Ministry of Health</span>
                  <span className="text-[#71717b]">Dec 2025</span>
                  <Badge className="bg-[#2b7fff]/15 text-[#2b7fff] w-fit">
                    Ongoing
                  </Badge>
                  <span className="font-medium text-[#2b7fff]">58%</span>
                </div>
                <div className="grid grid-cols-[auto_2fr_1.3fr_1fr_1.1fr_auto] text-sm leading-5 border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid p-3 items-center gap-3 w-full">
                  <button>
                    <Star />
                  </button>
                  <span className="font-medium">
                    Free Primary School Meal Program
                  </span>
                  <span className="text-[#71717b]">Dept. of Education</span>
                  <span className="text-[#71717b]">Aug 2024</span>
                  <Badge className="bg-[#2b7fff]/10 text-[#2b7fff] w-fit">
                    Completed
                  </Badge>
                  <span className="font-medium text-[#2b7fff]">100%</span>
                </div>
                <div className="grid grid-cols-[auto_2fr_1.3fr_1fr_1.1fr_auto] text-sm leading-5 border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid p-3 items-center gap-3 w-full">
                  <button>
                    <Star />
                  </button>
                  <span className="font-medium">
                    Coastal Highway Reconstruction
                  </span>
                  <span className="text-[#71717b]">Infrastructure Board</span>
                  <span className="font-medium text-[#e7000b]">Mar 2024</span>
                  <Badge className="bg-[#e7000b]/10 text-[#e7000b] w-fit">
                    Delayed
                  </Badge>
                  <span className="font-medium text-[#71717b]">41%</span>
                </div>
                <div className="grid grid-cols-[auto_2fr_1.3fr_1fr_1.1fr_auto] text-sm leading-5 border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid p-3 items-center gap-3 w-full">
                  <button>
                    <Star />
                  </button>
                  <span className="font-medium">
                    National e-Governance Portal
                  </span>
                  <span className="text-[#71717b]">Digital Services</span>
                  <span className="text-[#71717b]">Jun 2025</span>
                  <Badge className="bg-[#2b7fff]/15 text-[#2b7fff] w-fit">
                    Ongoing
                  </Badge>
                  <span className="font-medium text-[#2b7fff]">73%</span>
                </div>
                <div className="grid grid-cols-[auto_2fr_1.3fr_1fr_1.1fr_auto] text-sm leading-5 border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid p-3 items-center gap-3 w-full">
                  <button>
                    <Star />
                  </button>
                  <span className="font-medium">
                    Rural Clean Water Initiative
                  </span>
                  <span className="text-[#71717b]">Ministry of Health</span>
                  <span className="text-[#71717b]">Jan 2026</span>
                  <Badge className="bg-zinc-100 text-[#71717b] w-fit">
                    Planned
                  </Badge>
                  <span className="font-medium text-[#71717b]">8%</span>
                </div>
                <div className="grid grid-cols-[auto_2fr_1.3fr_1fr_1.1fr_auto] text-sm leading-5 p-3 items-center gap-3 w-full">
                  <button>
                    <Star />
                  </button>
                  <span className="font-medium">
                    Public Transport Modernization
                  </span>
                  <span className="text-[#71717b]">Infrastructure Board</span>
                  <span className="text-[#71717b]">Oct 2024</span>
                  <Badge className="bg-[#2b7fff]/10 text-[#2b7fff] w-fit">
                    Completed
                  </Badge>
                  <span className="font-medium text-[#2b7fff]">100%</span>
                </div>
              </CardContent>
            </Card>
          </main>
          <footer className="bg-white border-zinc-200 border-t-1 border-r-0 border-b-0 border-l-0 border-solid px-8 py-6 w-full">
            <div className="flex justify-between items-start gap-8 w-full">
              <div className="max-w-xs flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="size-7 rounded-lg bg-[#2b7fff] flex justify-center items-center">
                    <Landmark className="size-4 text-blue-50" />
                  </div>
                  <span className="font-bold text-sm leading-5">
                    GoodGov Portal
                  </span>
                </div>
                <p className="text-[#71717b] text-xs leading-4">
                  Promoting transparency and accountability in public
                  governance.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-sm leading-5">
                  Governance
                </span>
                <a className="text-[#71717b] text-xs leading-4">{`Budget & Expenditure`}</a>
                <a className="text-[#71717b] text-xs leading-4">Transparency</a>
                <a className="text-[#71717b] text-xs leading-4">
                  Public Figures
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-sm leading-5">Engage</span>
                <a className="text-[#71717b] text-xs leading-4">Complaints</a>
                <a className="text-[#71717b] text-xs leading-4">Central KYC</a>
                <a className="text-[#71717b] text-xs leading-4">
                  Accountability
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-sm leading-5">Support</span>
                <a className="text-[#71717b] text-xs leading-4">FAQ</a>
                <a className="text-[#71717b] text-xs leading-4">Contact</a>
                <a className="text-[#71717b] text-xs leading-4">Data Policy</a>
              </div>
            </div>
            <div className="border-zinc-200 border-t-1 border-r-0 border-b-0 border-l-0 border-solid flex mt-4 pt-4 justify-between items-center w-full">
              <span className="text-[#71717b] text-xs leading-4">
                © 2025 GoodGov Portal. All rights reserved.
              </span>
              <div className="flex items-center gap-3">
                <FallbackComponent className="size-4 text-[#71717b]" />
                <FallbackComponent className="size-4 text-[#71717b]" />
                <FallbackComponent className="size-4 text-[#71717b]" />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
