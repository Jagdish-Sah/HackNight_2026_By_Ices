import { useEffect } from "react";
import {
  Activity,
  BarChart3,
  CheckCircle,
  Clock,
  Database,
  DollarSign,
  Download,
  Eye,
  Filter,
  HelpCircle,
  Home,
  Landmark,
  LineChart as LucideLineChart,
  LogIn,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  PiggyBank,
  Receipt,
  RotateCcw,
  Shield,
  ShieldCheck,
  TrendingUp,
  Users,
  Wallet,
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
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
  XAxis,
  YAxis,
} from "recharts";

export default function App() {
  return (
    <div>
      <div className="bg-white text-zinc-950 flex flex-col w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <header className="bg-white border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid w-full">
          <div className="flex px-12 py-4 justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="size-9 rounded-lg bg-[#2b7fff] flex justify-center items-center">
                <Landmark className="size-5 text-blue-50" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm leading-5 tracking-tight">
                  GoodGov Portal
                </span>
                <span className="text-[#71717b] text-xs leading-4">
                  Public Fund Transparency
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="size-4" />
                Export
              </Button>
              <Button size="sm" className="bg-[#2b7fff] text-blue-50 gap-2">
                <LogIn className="size-4" />
                Sign In
              </Button>
            </div>
          </div>
          <nav className="flex px-12 justify-start items-center gap-1">
            <a className="border-transparent font-medium text-[#71717b] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex p-3 items-center gap-2">
              <Home className="size-4" />
              Home
            </a>
            <a className="font-semibold text-[#2b7fff] text-sm leading-5 border-[#2b7fff] border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex p-3 items-center gap-2">
              <DollarSign className="size-4" />
              {`Budget & Expenditure`}
            </a>
            <a className="border-transparent font-medium text-[#71717b] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex p-3 items-center gap-2">
              <Eye className="size-4" />
              Transparency
            </a>
            <a className="border-transparent font-medium text-[#71717b] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex p-3 items-center gap-2">
              <Users className="size-4" />
              Public Figures
            </a>
            <a className="border-transparent font-medium text-[#71717b] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex p-3 items-center gap-2">
              <Shield className="size-4" />
              Central KYC
            </a>
            <a className="border-transparent font-medium text-[#71717b] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex p-3 items-center gap-2">
              <MessageSquare className="size-4" />
              Complaints
            </a>
            <a className="border-transparent font-medium text-[#71717b] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex p-3 items-center gap-2">
              <CheckCircle className="size-4" />
              Accountability
            </a>
            <a className="border-transparent font-medium text-[#71717b] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex p-3 items-center gap-2">
              <HelpCircle className="size-4" />
              FAQ
            </a>
          </nav>
        </header>
        <section className="relative w-full h-60 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1610026378085-15d0e8f685db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBwYXJsaWFtZW50JTIwYXJjaGl0ZWN0dXJlfGVufDF8MHx8fDE3ODU4NDg2MTZ8MA&ixlib=rb-4.1.0&q=80&w=400"
            alt="Parliament building"
            className="object-cover w-full h-full"
            data-photoid="Nv1-l_xZnV4"
            data-authorname="paul silvan"
            data-authorurl="https://unsplash.com/@paulsilvan"
            data-blurhash="LSHK|Pt59ZNH.TWURiR-.7kAjrt6"
          />
          <div className="bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30 absolute inset-0" />
          <div className="flex absolute inset-0 px-12 flex-col justify-center gap-2">
            <Badge className="bg-blue-50/20 text-blue-50 border-black/1 border-0 border-solid gap-1 w-fit">
              <ShieldCheck className="size-3" />
              Good Governance Initiative
            </Badge>
            <h1 className="font-bold text-blue-50 text-3xl leading-9 tracking-tight">{`Budgets & Expenditure Transparency`}</h1>
            <p className="max-w-2xl leading-relaxed text-blue-50/90 text-sm leading-5">
              Track how public funds are allocated and spent across ministries
              and departments. Real-time visibility into every dollar,
              empowering citizens with open, accountable financial data.
            </p>
          </div>
        </section>
        <main className="bg-zinc-100/40 flex px-12 py-8 flex-col flex-1 gap-8">
          <div className="grid grid-cols-3 gap-6">
            <Card className="p-6 gap-4">
              <CardHeader className="flex p-0 flex-row justify-between items-center gap-2">
                <div className="flex flex-col gap-1">
                  <CardDescription className="uppercase text-xs leading-4 tracking-wide">
                    Total Budget Allocated
                  </CardDescription>
                  <CardTitle className="font-bold text-[#2b7fff] text-3xl leading-9">
                    $4.82B
                  </CardTitle>
                </div>
                <div className="size-12 rounded-xl bg-[#2b7fff]/10 flex justify-center items-center">
                  <Wallet className="size-6 text-[#2b7fff]" />
                </div>
              </CardHeader>
              <CardFooter className="p-0 gap-2">
                <TrendingUp className="size-4 text-[#2b7fff]" />
                <span className="text-[#71717b] text-xs leading-4">
                  +6.2% vs previous fiscal year
                </span>
              </CardFooter>
            </Card>
            <Card className="p-6 gap-4">
              <CardHeader className="flex p-0 flex-row justify-between items-center gap-2">
                <div className="flex flex-col gap-1">
                  <CardDescription className="uppercase text-xs leading-4 tracking-wide">
                    Total Expenditure
                  </CardDescription>
                  <CardTitle className="font-bold text-[#2b7fff] text-3xl leading-9">
                    $3.41B
                  </CardTitle>
                </div>
                <div className="size-12 rounded-xl bg-[#2b7fff]/10 flex justify-center items-center">
                  <Receipt className="size-6 text-[#2b7fff]" />
                </div>
              </CardHeader>
              <CardFooter className="p-0 gap-2">
                <Activity className="size-4 text-[#2b7fff]" />
                <span className="text-[#71717b] text-xs leading-4">
                  70.7% of allocated funds spent
                </span>
              </CardFooter>
            </Card>
            <Card className="p-6 gap-4">
              <CardHeader className="flex p-0 flex-row justify-between items-center gap-2">
                <div className="flex flex-col gap-1">
                  <CardDescription className="uppercase text-xs leading-4 tracking-wide">
                    Remaining Funds
                  </CardDescription>
                  <CardTitle className="font-bold text-[#2b7fff] text-3xl leading-9">
                    $1.41B
                  </CardTitle>
                </div>
                <div className="size-12 rounded-xl bg-[#2b7fff]/10 flex justify-center items-center">
                  <PiggyBank className="size-6 text-[#2b7fff]" />
                </div>
              </CardHeader>
              <CardFooter className="p-0 gap-2">
                <Clock className="size-4 text-[#2b7fff]" />
                <span className="text-[#71717b] text-xs leading-4">
                  29.3% available for allocation
                </span>
              </CardFooter>
            </Card>
          </div>
          <Card className="p-6 gap-6">
            <CardHeader className="flex p-0 flex-row justify-between items-start gap-4">
              <div className="flex flex-col gap-1">
                <CardTitle className="font-bold text-lg leading-7">
                  Budget vs Expenditure Comparison
                </CardTitle>
                <CardDescription className="text-sm leading-5">
                  Department-wise breakdown for the selected fiscal period
                </CardDescription>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Switch defaultChecked={false} />
                  <span className="text-[#71717b] text-xs leading-4">
                    Variance only
                  </span>
                </div>
                <Tabs defaultValue="bar">
                  <TabsList>
                    <TabsTrigger
                      value="bar"
                      className="text-xs leading-4 gap-1"
                    >
                      <BarChart3 className="size-4" />
                      Bar
                    </TabsTrigger>
                    <TabsTrigger
                      value="line"
                      className="text-xs leading-4 gap-1"
                    >
                      <LucideLineChart className="size-4" />
                      Trend
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <div className="rounded-lg bg-zinc-100/60 border-zinc-200 border-1 border-solid flex p-4 items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="size-4 text-[#2b7fff]" />
                <span className="font-medium text-sm leading-5">Filters</span>
              </div>
              <Select defaultValue="2024">
                <SelectTrigger className="bg-white w-36">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">FY 2024</SelectItem>
                  <SelectItem value="2023">FY 2023</SelectItem>
                  <SelectItem value="2022">FY 2022</SelectItem>
                  <SelectItem value="2021">FY 2021</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="bg-white w-48">
                  <SelectValue placeholder="Ministry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ministries</SelectItem>
                  <SelectItem value="finance">Ministry of Finance</SelectItem>
                  <SelectItem value="interior">Ministry of Interior</SelectItem>
                  <SelectItem value="health">Ministry of Health</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="bg-white w-48">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="infra">Infrastructure</SelectItem>
                  <SelectItem value="defense">Defense</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex-1" />
              <Button
                variant="ghost"
                size="sm"
                className="text-[#71717b] gap-1"
              >
                <RotateCcw className="size-4" />
                Reset
              </Button>
            </div>
            <CardContent className="p-0">
              <ChartContainer
                config={{
                  budget: {
                    label: "Budget",
                    color: "oklch(0.623 0.214 259.815)",
                  },
                  expenditure: {
                    label: "Expenditure",
                    color: "oklch(0.398 0.07 227.392)",
                  },
                }}
                className="w-full h-70"
              >
                <RechartsBarChart
                  data={[
                    { dept: "Education", budget: 920, expenditure: 640 },
                    { dept: "Health", budget: 810, expenditure: 590 },
                    { dept: "Infrastructure", budget: 1120, expenditure: 880 },
                    { dept: "Defense", budget: 760, expenditure: 610 },
                    { dept: "Agriculture", budget: 540, expenditure: 320 },
                    { dept: "Justice", budget: 380, expenditure: 250 },
                  ]}
                >
                  <CartesianGrid
                    vertical={false}
                    stroke="oklch(0.92 0.004 286.32)"
                  />
                  <XAxis
                    dataKey="dept"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    fontSize={12}
                  />
                  <YAxis tickLine={false} axisLine={false} fontSize={12} />
                  <ChartTooltip />
                  <Bar
                    dataKey="budget"
                    fill="oklch(0.623 0.214 259.815)"
                    radius={4}
                  />
                  <Bar
                    dataKey="expenditure"
                    fill="oklch(0.398 0.07 227.392)"
                    radius={4}
                  />
                </RechartsBarChart>
              </ChartContainer>
              <ChartContainer
                config={{
                  budget: {
                    label: "Budget",
                    color: "oklch(0.623 0.214 259.815)",
                  },
                  expenditure: {
                    label: "Expenditure",
                    color: "oklch(0.398 0.07 227.392)",
                  },
                }}
                className="hidden w-full h-70"
              >
                <RechartsLineChart
                  data={[
                    { month: "Q1", budget: 1200, expenditure: 820 },
                    { month: "Q2", budget: 1240, expenditure: 910 },
                    { month: "Q3", budget: 1180, expenditure: 950 },
                    { month: "Q4", budget: 1200, expenditure: 730 },
                  ]}
                >
                  <CartesianGrid
                    vertical={false}
                    stroke="oklch(0.92 0.004 286.32)"
                  />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    fontSize={12}
                  />
                  <YAxis tickLine={false} axisLine={false} fontSize={12} />
                  <ChartTooltip />
                  <Line
                    dataKey="budget"
                    stroke="oklch(0.623 0.214 259.815)"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    dataKey="expenditure"
                    stroke="oklch(0.398 0.07 227.392)"
                    strokeWidth={2}
                    dot={false}
                  />
                </RechartsLineChart>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card className="p-6 gap-4">
            <CardHeader className="flex p-0 flex-row justify-between items-center gap-2">
              <div className="flex flex-col gap-1">
                <CardTitle className="font-bold text-lg leading-7">
                  Department Ledger
                </CardTitle>
                <CardDescription className="text-sm leading-5">
                  Detailed allocation and spending records
                </CardDescription>
              </div>
              <Badge variant="secondary" className="gap-1">
                <Database className="size-3" />6 records
              </Badge>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Department</TableHead>
                    <TableHead className="text-right">Allocated</TableHead>
                    <TableHead className="text-right">Spent</TableHead>
                    <TableHead className="text-right">Remaining</TableHead>
                    <TableHead className="text-right">Utilization</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Education</TableCell>
                    <TableCell className="text-right">$920M</TableCell>
                    <TableCell className="text-right">$640M</TableCell>
                    <TableCell className="font-medium text-right text-[#2b7fff]">
                      $280M
                    </TableCell>
                    <TableCell className="text-right">70%</TableCell>
                    <TableCell className="text-center">
                      <Badge className="bg-[#2b7fff]/10 text-[#2b7fff] border-black/1 border-0 border-solid">
                        On Track
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Health</TableCell>
                    <TableCell className="text-right">$810M</TableCell>
                    <TableCell className="text-right">$590M</TableCell>
                    <TableCell className="font-medium text-right text-[#2b7fff]">
                      $220M
                    </TableCell>
                    <TableCell className="text-right">73%</TableCell>
                    <TableCell className="text-center">
                      <Badge className="bg-[#2b7fff]/10 text-[#2b7fff] border-black/1 border-0 border-solid">
                        On Track
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Infrastructure
                    </TableCell>
                    <TableCell className="text-right">$1,120M</TableCell>
                    <TableCell className="text-right">$880M</TableCell>
                    <TableCell className="font-medium text-right text-[#2b7fff]">
                      $240M
                    </TableCell>
                    <TableCell className="text-right">79%</TableCell>
                    <TableCell className="text-center">
                      <Badge className="bg-zinc-100 text-zinc-900 border-black/1 border-0 border-solid">
                        Review
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Defense</TableCell>
                    <TableCell className="text-right">$760M</TableCell>
                    <TableCell className="text-right">$610M</TableCell>
                    <TableCell className="font-medium text-right text-[#2b7fff]">
                      $150M
                    </TableCell>
                    <TableCell className="text-right">80%</TableCell>
                    <TableCell className="text-center">
                      <Badge className="bg-zinc-100 text-zinc-900 border-black/1 border-0 border-solid">
                        Review
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Agriculture</TableCell>
                    <TableCell className="text-right">$540M</TableCell>
                    <TableCell className="text-right">$320M</TableCell>
                    <TableCell className="font-medium text-right text-[#2b7fff]">
                      $220M
                    </TableCell>
                    <TableCell className="text-right">59%</TableCell>
                    <TableCell className="text-center">
                      <Badge className="bg-[#2b7fff]/10 text-[#2b7fff] border-black/1 border-0 border-solid">
                        On Track
                      </Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Justice</TableCell>
                    <TableCell className="text-right">$380M</TableCell>
                    <TableCell className="text-right">$250M</TableCell>
                    <TableCell className="font-medium text-right text-[#2b7fff]">
                      $130M
                    </TableCell>
                    <TableCell className="text-right">66%</TableCell>
                    <TableCell className="text-center">
                      <Badge className="bg-[#2b7fff]/10 text-[#2b7fff] border-black/1 border-0 border-solid">
                        On Track
                      </Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
        <footer className="bg-[#2b7fff] text-blue-50 px-12 py-8 w-full">
          <div className="grid grid-cols-4 gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-blue-50/20 flex justify-center items-center">
                  <Landmark className="size-4" />
                </div>
                <span className="font-bold">GoodGov Portal</span>
              </div>
              <p className="leading-relaxed text-blue-50/80 text-xs leading-4">
                Committed to open governance and public accountability through
                transparent fiscal reporting.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-sm leading-5">
                Governance
              </span>
              <a className="text-blue-50/80 text-xs leading-4">Transparency</a>
              <a className="text-blue-50/80 text-xs leading-4">
                Public Figures
              </a>
              <a className="text-blue-50/80 text-xs leading-4">
                Accountability
              </a>
              <a className="text-blue-50/80 text-xs leading-4">Central KYC</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-sm leading-5">Resources</span>
              <a className="text-blue-50/80 text-xs leading-4">
                Open Data Sets
              </a>
              <a className="text-blue-50/80 text-xs leading-4">
                Annual Reports
              </a>
              <a className="text-blue-50/80 text-xs leading-4">
                File a Complaint
              </a>
              <a className="text-blue-50/80 text-xs leading-4">FAQ</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-sm leading-5">Contact</span>
              <div className="text-blue-50/80 text-xs leading-4 flex items-center gap-2">
                <Mail className="size-3" />
                info@goodgov.gov
              </div>
              <div className="text-blue-50/80 text-xs leading-4 flex items-center gap-2">
                <Phone className="size-3" />
                +1 (800) 555-0142
              </div>
              <div className="text-blue-50/80 text-xs leading-4 flex items-center gap-2">
                <MapPin className="size-3" />
                100 Governance Ave, Capital City
              </div>
            </div>
          </div>
          <Separator className="bg-blue-50/20 my-6" />
          <div className="flex justify-between items-center">
            <span className="text-blue-50/70 text-xs leading-4">
              © 2024 GoodGov Portal. All rights reserved.
            </span>
            <div className="flex items-center gap-4">
              <a className="text-blue-50/70 text-xs leading-4">
                Privacy Policy
              </a>
              <a className="text-blue-50/70 text-xs leading-4">Terms of Use</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
