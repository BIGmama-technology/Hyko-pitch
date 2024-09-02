import {
	AlignVerticalSpaceAround,
	ArrowUpDown,
	AudioLines,
	BarChart,
	Bird,
	Crop,
	FlipHorizontal,
	FunctionSquare,
	Hash,
	Image,
	Layers,
	ListMinus,
	Mail,
	RotateCcw,
	Ruler,
	Scaling,
	Type,
	Video,
	Wand2,
	Waypoints
} from 'lucide-react'

import { cn } from '@hyko/utils'

import { HuggingFace } from '~/components/icons//huggingface'
import { OpenAI } from '~/components/icons//openai'
import { AirTableIcon } from '~/components/icons/air-table'
import { Anthropic } from '~/components/icons/anthropic'
import { Arxiv } from '~/components/icons/arxiv'
import { Cohere } from '~/components/icons/cohere'
import { Csv } from '~/components/icons/csv'
import { DiscordIcon } from '~/components/icons/discord'
import { DocsIcon } from '~/components/icons/docs'
import { DriveIcon } from '~/components/icons/drive'
import { Duckduckgo } from '~/components/icons/duckduckgo'
import { FireCrawlIcon } from '~/components/icons/firecrawl'
import { Gemini } from '~/components/icons/gemini'
import { GithubIcon } from '~/components/icons/github'
import { GmailIcon } from '~/components/icons/gmail'
import { GoogleIcon } from '~/components/icons/google'
import { Groq } from '~/components/icons/groq'
import { JinaIcon } from '~/components/icons/jina'
import { Microsoft } from '~/components/icons/microsoft'
import { Mistral } from '~/components/icons/mistral'
import { NotionIcon } from '~/components/icons/notion'
import { OpenRouter } from '~/components/icons/openrouter'
import { OutlookIcon } from '~/components/icons/outlook'
import { Pdf } from '~/components/icons/pdf'
import { RedditIcon } from '~/components/icons/reddit'
import { Replicate } from '~/components/icons/replicate'
import { SheetsIcon } from '~/components/icons/sheets'
import { StabilityAi } from '~/components/icons/stabilityai'
import { Utils } from '~/components/icons/utils'
import { Wikipedia } from '~/components/icons/wikipedia'
import { XIcon } from '~/components/icons/x'
import { YoutubeIcon } from '~/components/icons/youtube'
import { TripadvisorIcon } from './trip-advisor'
interface IconProps {
	name: keyof typeof Icons
	className?: string
}

export const Icons = {
	models: Wand2,
	functions: FunctionSquare,
	apis: Waypoints,
	image: Image,
	audio: AudioLines,
	video: Video,
	pdf: Pdf,
	io: ArrowUpDown,
	utils: Utils,
	github: GithubIcon,
	drive: DriveIcon,
	docs: DocsIcon,
	sheets: SheetsIcon,
	youtube: YoutubeIcon,
	discord: DiscordIcon,
	notion: NotionIcon,
	airtable: AirTableIcon,
	x: XIcon,
	reddit: RedditIcon,
	outlook: OutlookIcon,
	gmail: GmailIcon,
	openai: OpenAI,
	hf: HuggingFace,
	openrouter: OpenRouter,
	cohere: Cohere,
	anthropic: Anthropic,
	arxiv: Arxiv,
	google: GoogleIcon,
	duckduckgo: Duckduckgo,
	gemini: Gemini,
	microsoft: Microsoft,
	mistral: Mistral,
	stabilityai: StabilityAi,
	groq: Groq,
	replicate: Replicate,
	wikipedia: Wikipedia,
	firecrawl: FireCrawlIcon,
	jina: JinaIcon,
	text: Type,
	number: Hash,
	list: ListMinus,
	csv: Csv,
	graph: BarChart,
	flip: FlipHorizontal,
	dimensions: Ruler,
	crop: Crop,
	padding: AlignVerticalSpaceAround,
	resize: Scaling,
	rotate: RotateCcw,
	stack: Layers,
	email: Mail,
	tripadvisor: TripadvisorIcon
}

export const CustomIcon = ({ name, className }: IconProps) => {
	const Icon = Icons[name as keyof typeof Icons] ?? Bird

	return <Icon className={cn('size-10', className)} />
}
