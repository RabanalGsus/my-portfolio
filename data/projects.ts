export type Project = {
  title: string;
  description: string;
  problem: string;
  approach: string;
  tech: string[];
  outcome: string;
  links?: { label: string; href: string }[];
  year?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Topic Classification on \"el Congreso de los Diputados\"",
    description:
      "Topic Classification Model trained on raw text from parliamentary speeches in Spanish.",
    problem:
      "Model topics from Parliamentary Speeches from Congress.",
    approach:
      "Analyzed the substantiality of the text with a simple logistic regression model initially, achieving high accuracy and precision in F1 tests; ascertaining the semantical validity of the data, then tried to model the topics, after careful consideration and a lot of testing ended up with BerTopic and a simple siamese neural network. As the most suitable approach for the given ParliaMint Data. ",
    tech: ["Python", "BertTopic", "Siamese Networks", "FineTunning", "Topic Classification"],
    outcome:
      "Obtained a proficiently performing model able to produce semantically meaningful topics.",
    year: "2026",
    featured: false,
  },
  {
    title: "Fine-tuning T5 on SCAN",
    description:
      "Studied compositional generalization by fine-tuning T5-small on SCAN tasks with custom evaluation.",
    problem:
      "Investigate whether Transformer-based models can generalize compositionally beyond their training distribution.",
    approach:
      "Fine-tuned T5-small on SCAN command–action pairs and tracked both token-level and sequence-level accuracy.",
    tech: ["PyTorch", "Transformers", "T5", "NLP", "Sequence Learning"],
    outcome:
      "Reached very low training loss and observed expected generalization gaps on held-out compositions.",
    links: [
      { label: "GitHub", href: "https://github.com/hjv300/final_project" },
    ],
    year: "2025",
    featured: true,
  },
  {
    title: "Multi-author Writing Style Analysis",
    description:
      "Built a BERT-based approach to detect authorship changes across paragraph boundaries using ground-truth JSON annotations.",
    problem:
      "Detect authorship changes across paragraph boundaries in multi-author documents.",
    approach:
      "Implemented a BERT-based classifier using paragraph representations and supervised paragraph-transition labels.",
    tech: ["Python", "BERT", "NLP", "Data Analysis"],
    outcome:
      "Successfully detected stylistic transitions across documents of varying difficulty levels.",
    links: [
      { label: "GitHub", href: "https://github.com/hjv300/bertformultiauthorstylemodel-reexamlp2" },
    ],
    year: "2025",
    featured: true,
  },
  {
    title: "Subtitle generation pipeline (faster-whisper)",
    description:
      "Wrote a script to generate subtitles efficiently using faster-whisper and an inference-optimized backend.",
    problem:
      "Create reliable subtitle output from audio while keeping inference fast on consumer hardware.",
    approach:
      "Built an automated pipeline using faster-whisper, with attention to chunking, timing, and subtitle formatting.",
    tech: ["Python", "Whisper", "CTranslate2", "Audio", "Tooling"],
    outcome:
      "Produced consistent subtitle files with a workflow suitable for repeated use.",
    year: "2024",
    featured: false,
  },
  {
    title: "Bachelor Thesis: Anaphora resolution and reanalysis during L2 processing: A replication study using the visual world paradigm.",
    description:
      "Investigated how Spanish learners of English resolve ambiguous pronoun reference and attachment structures in sentence processing.",
    problem:
      "Explore how second-language speakers interpret structurally ambiguous sentences involving pronouns and multiple possible antecedents.",
    approach:
      "Designed a linguistically motivated study grounded in psycholinguistic research on anaphora resolution, attachment ambiguity, and cross-linguistic sentence processing.",
    tech: [
      "Linguistics",
      "Psycholinguistics",
      "Anaphora Resolution",
      "Second Language Acquisition",
      "Sentence Processing",
      "Eye-tracking",
    ],
    outcome:
      "Produced a research thesis connecting syntactic ambiguity, cross-linguistic influence, and L2 interpretation strategies. Awarded a mention of excellence in linguistics.",
    year: "2023",
    featured: false,
  },
  {
    title: "Master Thesis: Ambiguous attachment through the Visual World Paradigm: An experimental study of Danish learners of Spanish",
    description:
      "Studied Spanish, Danish, and Danish L2 Spanish anaphora resolution preferences using a visual-world eye-tracking paradigm.",
    problem:
      "Investigate how speakers resolve ambiguous pronouns when two possible antecedents are available, and whether L2 learners converge on the target language or show L1 influence.",
    approach:
      "Designed and implemented a visual-world eye-tracking experiment with auditory stimuli, controlled visual scenes, manually defined regions of interest, and fixation-based analysis.",
    tech: [
      "Eye-tracking",
      "Visual World Paradigm",
      "Psycholinguistics",
      "Experimental Design",
      "Data Analysis",
      "Anaphora Resolution",
    ],
    outcome:
      "Produced a cross-linguistic experimental study combining psycholinguistic theory, eye-tracking methodology, and fixation-based analysis of sentence interpretation.",
    year: "2026",
    featured: true,
  },
];
