const units = [
  {
    name: "Prerequisite Repair: Grade 6–7 Tools",
    code: "repair",
    gradeBand: "Targeted repair from Grades 6–7 before Grade 8 work",
    lessons: [
      {n:"Rebuilding complete-sentence control", f:"distinguishing complete sentences from fragments and run-ons", a:"identify and repair", v:["fragment","run-on","independent clause"]},
      {n:"Repairing comma-boundary errors", f:"using commas and periods to mark clause boundaries", a:"edit", v:["comma splice","conjunction","boundary"]},
      {n:"Recovering paragraph focus", f:"finding a paragraph's controlling idea and supporting details", a:"trace", v:["topic sentence","controlling idea","supporting detail"]},
      {n:"Revisiting context-clue strategies", f:"using nearby wording to infer an unfamiliar word's meaning", a:"infer", v:["context clue","definition clue","connotation"]},
      {n:"Refreshing narrative point of view", f:"recognizing first-person and third-person narration", a:"distinguish", v:["narrator","first person","third person"]},
      {n:"Revisiting summary without opinion", f:"condensing central events or ideas without commentary", a:"compose", v:["summary","central idea","objective"]},
      {n:"Repairing evidence-and-reasoning links", f:"explaining how a quoted detail supports a claim", a:"connect", v:["claim","evidence","reasoning"]},
      {n:"Reviewing main-idea hierarchy", f:"separating central ideas from minor details", a:"rank", v:["main idea","key detail","hierarchy"]},
      {n:"Restoring pronoun clarity", f:"matching pronouns clearly to antecedents", a:"revise", v:["pronoun","antecedent","agreement"]},
      {n:"Rebuilding verb-tense consistency", f:"keeping verb tense stable unless time changes", a:"maintain", v:["verb tense","shift","consistency"]},
      {n:"Reviewing compare-and-contrast structure", f:"tracking meaningful similarities and differences", a:"organize", v:["comparison","contrast","criterion"]},
      {n:"Recovering quote integration", f:"embedding a short quotation grammatically in a sentence", a:"integrate", v:["quotation","signal phrase","citation"]},
      {n:"Revisiting credible-source signals", f:"noticing authorship, evidence, date, and purpose", a:"evaluate", v:["credibility","author","currency"]},
      {n:"Launching Grade 8 reading habits", f:"annotating purposefully before making an interpretation", a:"practice", v:["annotation","pattern","inference"]}
    ]
  },
  {
    name: "Close Reading and Literary Analysis",
    code: "close-reading",
    gradeBand: "Grade 8 close reading",
    lessons: [
      {n:"Annotating a first read for notice-and-note", f:"marking surprising details, repeated words, and changes during a first read", a:"annotate", v:["notice","pattern","annotation"]},
      {n:"Forming a defensible textual inference", f:"combining textual evidence with background knowledge to infer an unstated idea", a:"form", v:["inference","implicit","evidence"]},
      {n:"Following a character's internal conflict", f:"explaining how competing desires shape a character's decisions", a:"analyze", v:["internal conflict","motivation","decision"]},
      {n:"Following a character's external conflict", f:"explaining how a character responds to another person, society, or nature", a:"analyze", v:["external conflict","obstacle","response"]},
      {n:"Tracing character change across scenes", f:"tracking how events alter a character's beliefs, choices, or relationships", a:"trace", v:["character arc","turning point","development"]},
      {n:"Analyzing dialogue for subtext", f:"using what speakers avoid or imply to interpret dialogue", a:"interpret", v:["subtext","dialogue","implication"]},
      {n:"Analyzing setting as a pressure on plot", f:"explaining how time and place create constraints or opportunities", a:"explain", v:["setting","atmosphere","constraint"]},
      {n:"Distinguishing mood from tone", f:"separating the reader's emotional response from an author's attitude", a:"distinguish", v:["mood","tone","attitude"]},
      {n:"Interpreting precise word connotations", f:"explaining how an author's word choice carries associations beyond definition", a:"interpret", v:["connotation","diction","association"]},
      {n:"Analyzing figurative comparison", f:"interpreting how metaphor, simile, or personification develops meaning", a:"analyze", v:["metaphor","simile","personification"]},
      {n:"Tracing imagery across a passage", f:"connecting sensory details to an idea or emotional effect", a:"trace", v:["imagery","sensory detail","motif"]},
      {n:"Interpreting symbolism with evidence", f:"testing whether a repeated object or image represents an abstract idea", a:"interpret", v:["symbol","recurrence","abstract idea"]},
      {n:"Explaining irony and its effect", f:"identifying a gap between expectation and outcome and explaining its purpose", a:"explain", v:["irony","expectation","contrast"]},
      {n:"Analyzing suspense and pacing", f:"showing how an author delays information or controls event speed", a:"analyze", v:["suspense","pacing","delay"]},
      {n:"Comparing two portrayals of a theme", f:"comparing how different texts develop a shared thematic idea", a:"compare", v:["theme","portrayal","development"]},
      {n:"Moving from topic to theme statement", f:"writing a complete, arguable statement about a text's message", a:"develop", v:["topic","theme","universal"]},
      {n:"Tracing theme through choices and consequences", f:"linking character actions and results to a developing theme", a:"trace", v:["consequence","theme","causation"]},
      {n:"Analyzing a narrator's reliability", f:"judging how a narrator's limits, motives, or knowledge shape an account", a:"evaluate", v:["reliability","bias","perspective"]},
      {n:"Comparing point-of-view effects", f:"explaining how a different narrator would alter the information a reader receives", a:"compare", v:["point of view","lens","omission"]},
      {n:"Analyzing dramatic irony in drama", f:"explaining how audience knowledge creates tension beyond a character's knowledge", a:"analyze", v:["dramatic irony","audience","tension"]},
      {n:"Reading stage directions as evidence", f:"using staging, movement, and expression to interpret a dramatic scene", a:"interpret", v:["stage direction","gesture","blocking"]},
      {n:"Comparing a text with a film adaptation", f:"evaluating how adaptation choices preserve or change meaning", a:"evaluate", v:["adaptation","medium","interpretation"]},
      {n:"Analyzing allusion and reference", f:"explaining how a reference to another text or event adds meaning", a:"explain", v:["allusion","reference","context"]},
      {n:"Unpacking a complex poem", f:"paraphrasing a poem before analyzing its structure and language", a:"unpack", v:["paraphrase","line break","stanza"]},
      {n:"Analyzing sound and rhythm in poetry", f:"connecting sound patterns and rhythm to a poem's meaning or tone", a:"analyze", v:["alliteration","rhythm","repetition"]},
      {n:"Synthesizing close-reading observations", f:"turning several precise observations into one coherent interpretation", a:"synthesize", v:["synthesis","interpretation","claim"]}
    ]
  },
  {
    name: "Language, Grammar, and Style",
    code: "language",
    gradeBand: "Grade 8 language and conventions",
    lessons: [
      {n:"Recognizing independent and dependent clauses", f:"identifying clause types and their jobs in sentences", a:"classify", v:["independent clause","dependent clause","subordinator"]},
      {n:"Building varied simple and compound sentences", f:"choosing sentence structures that make relationships clear", a:"compose", v:["simple sentence","compound sentence","coordinator"]},
      {n:"Using complex sentences for logical relationships", f:"selecting subordinators that show time, cause, condition, or contrast", a:"use", v:["complex sentence","subordination","relationship"]},
      {n:"Punctuating introductory elements", f:"using commas after introductory phrases and dependent clauses", a:"punctuate", v:["introductory phrase","dependent clause","comma"]},
      {n:"Punctuating nonessential information", f:"setting off extra information without interrupting the core sentence", a:"punctuate", v:["nonessential","appositive","parentheses"]},
      {n:"Using semicolons between related clauses", f:"joining closely related independent clauses without a coordinating conjunction", a:"use", v:["semicolon","independent clause","relationship"]},
      {n:"Using colons to introduce explanation", f:"introducing lists, examples, or restatements after a complete clause", a:"use", v:["colon","anticipation","restatement"]},
      {n:"Using dashes for emphasis", f:"using dashes deliberately to mark interruption or emphasis", a:"use", v:["dash","interruption","emphasis"]},
      {n:"Maintaining parallel structure", f:"matching grammatical forms in lists and paired ideas", a:"revise", v:["parallelism","series","balance"]},
      {n:"Correcting misplaced modifiers", f:"placing descriptive phrases beside the words they describe", a:"correct", v:["modifier","misplaced","ambiguity"]},
      {n:"Correcting dangling modifiers", f:"supplying a clear actor for an introductory descriptive phrase", a:"correct", v:["dangling modifier","subject","logic"]},
      {n:"Choosing active and passive voice", f:"choosing voice based on emphasis, responsibility, and clarity", a:"choose", v:["active voice","passive voice","agent"]},
      {n:"Controlling shifts in verb mood", f:"using indicative, imperative, conditional, and subjunctive mood appropriately", a:"control", v:["mood","conditional","subjunctive"]},
      {n:"Using verbals precisely", f:"distinguishing gerunds, participles, and infinitives in sentences", a:"use", v:["gerund","participle","infinitive"]},
      {n:"Resolving vague pronoun reference", f:"replacing unclear pronouns with precise nouns or noun phrases", a:"resolve", v:["reference","antecedent","ambiguity"]},
      {n:"Maintaining agreement in complex sentences", f:"matching subjects and verbs when phrases interrupt the sentence", a:"maintain", v:["subject","verb agreement","interrupter"]},
      {n:"Using academic transitions", f:"choosing transitions that accurately signal a logical connection", a:"select", v:["transition","addition","contrast"]},
      {n:"Distinguishing denotation and connotation", f:"choosing words for both literal meaning and emotional association", a:"distinguish", v:["denotation","connotation","register"]},
      {n:"Matching diction to audience", f:"adjusting word choice for formal, informal, expert, or public audiences", a:"adjust", v:["diction","audience","register"]},
      {n:"Eliminating redundancy", f:"cutting repeated meaning while preserving necessary emphasis", a:"edit", v:["redundancy","concise","precision"]},
      {n:"Using reference tools strategically", f:"using dictionaries, style guides, and corpora to solve language problems", a:"consult", v:["usage","style guide","corpus"]},
      {n:"Interpreting Greek and Latin roots", f:"using roots and affixes to unlock unfamiliar academic vocabulary", a:"analyze", v:["root","prefix","suffix"]},
      {n:"Recognizing nuanced word relationships", f:"distinguishing analogy, antonymy, and degrees of meaning", a:"recognize", v:["analogy","antonym","nuance"]},
      {n:"Revising for sentence fluency", f:"combining or dividing sentences to improve rhythm and clarity", a:"revise", v:["fluency","cadence","variety"]},
      {n:"Editing a paragraph for conventions and style", f:"applying grammar and style choices together in a polished paragraph", a:"edit", v:["conventions","revision","proofreading"]}
    ]
  },
  {
    name: "Narrative and Informative Writing",
    code: "writing",
    gradeBand: "Grade 8 composition",
    lessons: [
      {n:"Finding a narrative moment worth telling", f:"selecting a focused moment that can reveal change or insight", a:"select", v:["moment","focus","insight"]},
      {n:"Establishing a narrative situation", f:"orienting readers with purposeful details of situation, narrator, and setting", a:"establish", v:["situation","orientation","context"]},
      {n:"Developing a narrative conflict", f:"introducing a meaningful problem that drives a sequence of events", a:"develop", v:["conflict","stakes","complication"]},
      {n:"Sequencing narrative events for effect", f:"ordering events to build clarity, tension, and significance", a:"sequence", v:["sequence","chronology","pacing"]},
      {n:"Writing precise sensory details", f:"using selected sensory details to make a scene vivid without overloading it", a:"write", v:["sensory detail","specificity","imagery"]},
      {n:"Writing dialogue that reveals character", f:"using dialogue to show relationships, motives, or conflict", a:"write", v:["dialogue","characterization","subtext"]},
      {n:"Using narrative pacing deliberately", f:"slowing, summarizing, or pausing to control a reader's attention", a:"control", v:["pacing","scene","summary"]},
      {n:"Shaping an effective narrative ending", f:"ending a narrative with reflection or consequence instead of abrupt closure", a:"shape", v:["resolution","reflection","consequence"]},
      {n:"Generating an informative writing question", f:"turning a broad subject into a focused explanatory question", a:"narrow", v:["topic","focus question","scope"]},
      {n:"Drafting an informative controlling idea", f:"writing a clear central idea that organizes explanation rather than argument", a:"draft", v:["controlling idea","exposition","organization"]},
      {n:"Grouping information by concept", f:"organizing related facts into logical sections rather than a list", a:"group", v:["category","subtopic","coherence"]},
      {n:"Writing informative introductions", f:"opening with context and a controlling idea that prepares readers", a:"write", v:["introduction","context","controlling idea"]},
      {n:"Developing a body paragraph with evidence", f:"explaining a focused point with relevant facts, examples, and reasoning", a:"develop", v:["elaboration","evidence","analysis"]},
      {n:"Explaining quotations instead of dropping them", f:"introducing, interpreting, and connecting a quotation to a point", a:"explain", v:["integration","quotation","commentary"]},
      {n:"Using definitions and classifications", f:"choosing explanatory structures that make a complex subject understandable", a:"use", v:["definition","classification","concept"]},
      {n:"Using cause-and-effect explanation", f:"showing accurate causal relationships without confusing correlation", a:"explain", v:["cause","effect","correlation"]},
      {n:"Using compare-and-contrast explanation", f:"organizing a comparison around meaningful criteria and significance", a:"organize", v:["criterion","similarity","difference"]},
      {n:"Integrating visual information in writing", f:"explaining how a chart, image, or diagram strengthens an explanation", a:"integrate", v:["visual","caption","interpretation"]},
      {n:"Writing conclusions that extend understanding", f:"closing by clarifying significance instead of merely repeating an introduction", a:"write", v:["conclusion","significance","synthesis"]},
      {n:"Revising for coherence", f:"checking that ideas, transitions, and paragraph order create a clear path", a:"revise", v:["coherence","transition","logical order"]},
      {n:"Revising for precision and economy", f:"replacing vague or inflated wording with exact, efficient language", a:"revise", v:["precision","economy","vagueness"]},
      {n:"Editing a multi-paragraph draft", f:"using a staged editing process for conventions, formatting, and readability", a:"edit", v:["draft","editing pass","publication"]},
      {n:"Reflecting on a writing process", f:"using feedback and evidence from a draft to name a next writing goal", a:"reflect", v:["reflection","feedback","goal"]},
      {n:"Publishing for an authentic audience", f:"making deliberate final choices about format, tone, and reader access", a:"publish", v:["audience","format","accessibility"]}
    ]
  },
  {
    name: "Argument and Rhetoric",
    code: "argument",
    gradeBand: "Grade 8 argument",
    lessons: [
      {n:"Distinguishing claim from topic", f:"turning a subject into a specific position that could be supported or challenged", a:"distinguish", v:["claim","topic","position"]},
      {n:"Writing a qualified thesis", f:"stating a focused argument while acknowledging reasonable limits", a:"write", v:["thesis","qualification","scope"]},
      {n:"Identifying reasons and evidence", f:"separating an argument's why from the facts used to support it", a:"identify", v:["reason","evidence","warrant"]},
      {n:"Evaluating relevant evidence", f:"judging whether evidence directly supports a particular claim", a:"evaluate", v:["relevance","support","claim"]},
      {n:"Evaluating sufficient evidence", f:"deciding whether a claim has enough varied support to be convincing", a:"evaluate", v:["sufficiency","corroboration","evidence"]},
      {n:"Recognizing logical fallacies", f:"identifying reasoning errors that can make an argument sound stronger than it is", a:"recognize", v:["fallacy","generalization","false dilemma"]},
      {n:"Recognizing emotional appeals", f:"evaluating when emotional language informs, manipulates, or distracts", a:"evaluate", v:["pathos","appeal","manipulation"]},
      {n:"Analyzing credibility appeals", f:"examining how expertise, character, and transparency affect trust", a:"analyze", v:["ethos","expertise","credibility"]},
      {n:"Analyzing logical appeals", f:"testing whether facts and reasoning lead soundly to a conclusion", a:"analyze", v:["logos","reasoning","conclusion"]},
      {n:"Identifying a counterclaim", f:"stating the strongest reasonable opposing view fairly and accurately", a:"identify", v:["counterclaim","opposing view","fairness"]},
      {n:"Responding to a counterclaim", f:"answering an opposing view with evidence, distinction, or concession", a:"respond", v:["rebuttal","concession","distinction"]},
      {n:"Organizing an argument logically", f:"sequencing claims, reasons, evidence, and responses for reader understanding", a:"organize", v:["line of reasoning","sequence","structure"]},
      {n:"Writing an argumentative introduction", f:"establishing context, stakes, and a defensible thesis", a:"write", v:["context","stakes","thesis"]},
      {n:"Developing a reason with commentary", f:"explaining how evidence proves a reason instead of letting evidence stand alone", a:"develop", v:["commentary","analysis","reasoning"]},
      {n:"Integrating evidence with citation", f:"weaving source material into an argument with clear attribution", a:"integrate", v:["attribution","citation","signal phrase"]},
      {n:"Using transitions to signal logic", f:"showing addition, cause, contrast, and concession between ideas", a:"use", v:["transition","concession","therefore"]},
      {n:"Writing an argument conclusion", f:"returning to the stakes and implications of a thesis without repetition", a:"write", v:["implication","conclusion","call to action"]},
      {n:"Analyzing a public-service argument", f:"evaluating how a real public message uses claim, evidence, and audience awareness", a:"analyze", v:["public service","audience","purpose"]},
      {n:"Writing a policy recommendation", f:"arguing for a specific feasible action using criteria and evidence", a:"recommend", v:["policy","criteria","feasibility"]},
      {n:"Writing a literary argument", f:"defending an interpretation of a text with carefully selected textual evidence", a:"defend", v:["interpretation","textual evidence","line of reasoning"]},
      {n:"Peer-reviewing an argument", f:"giving actionable feedback about claim, evidence, organization, and counterclaim", a:"review", v:["peer review","criterion","revision"]},
      {n:"Revising an argument for audience", f:"adjusting evidence, tone, and explanation for an identified audience", a:"revise", v:["audience","tone","rhetoric"]}
    ]
  },
  {
    name: "Research and Synthesis",
    code: "research",
    gradeBand: "Grade 8 research",
    lessons: [
      {n:"Turning curiosity into a researchable question", f:"creating a focused question that can be answered with credible sources", a:"formulate", v:["research question","focus","inquiry"]},
      {n:"Mapping keywords and search terms", f:"generating precise search terms, synonyms, and limiting words", a:"plan", v:["keyword","synonym","search string"]},
      {n:"Distinguishing primary and secondary sources", f:"classifying sources by their relationship to an event, idea, or artifact", a:"distinguish", v:["primary source","secondary source","perspective"]},
      {n:"Evaluating an author's expertise", f:"checking an author's qualifications, affiliations, and relevant experience", a:"evaluate", v:["expertise","affiliation","authority"]},
      {n:"Evaluating a publisher's purpose", f:"examining who published information and why that organization exists", a:"evaluate", v:["publisher","purpose","sponsorship"]},
      {n:"Checking currency and context", f:"determining whether a source is current enough and appropriately situated", a:"check", v:["currency","context","update"]},
      {n:"Reading laterally to verify a source", f:"leaving a source to see what independent sources report about it", a:"verify", v:["lateral reading","verification","independent source"]},
      {n:"Distinguishing fact, interpretation, and opinion", f:"labeling types of statements before using them as evidence", a:"distinguish", v:["fact","interpretation","opinion"]},
      {n:"Taking paraphrase notes ethically", f:"restating source ideas accurately in new language while retaining attribution", a:"paraphrase", v:["paraphrase","attribution","plagiarism"]},
      {n:"Quoting selectively and accurately", f:"copying only necessary wording and preserving a quotation's meaning", a:"quote", v:["quotation","ellipsis","context"]},
      {n:"Creating source cards", f:"recording bibliographic facts and source usefulness before drafting", a:"document", v:["source card","bibliography","metadata"]},
      {n:"Sorting research notes by claim", f:"organizing notes according to the ideas they may support rather than source order", a:"sort", v:["claim","note","category"]},
      {n:"Corroborating a factual claim", f:"comparing independent reliable sources before treating a fact as established", a:"corroborate", v:["corroboration","independence","consensus"]},
      {n:"Recognizing gaps in research", f:"identifying unanswered questions, weak evidence, and missing perspectives", a:"identify", v:["gap","limitation","perspective"]},
      {n:"Synthesizing across sources", f:"combining compatible source ideas into a new, accurately supported understanding", a:"synthesize", v:["synthesis","convergence","tension"]},
      {n:"Managing conflicting sources", f:"explaining why credible sources disagree instead of simply choosing one", a:"analyze", v:["conflict","methodology","claim"]},
      {n:"Using in-text citations", f:"placing clear citations where readers need to trace borrowed information", a:"cite", v:["in-text citation","source","traceability"]},
      {n:"Building a works-cited entry", f:"recording source information in a consistent citation format", a:"format", v:["works cited","container","access date"]},
      {n:"Avoiding patchwriting", f:"transforming source ideas through genuine paraphrase and original organization", a:"avoid", v:["patchwriting","paraphrase","originality"]},
      {n:"Drafting a research-based explanation", f:"organizing a neutral explanation that synthesizes evidence from several sources", a:"draft", v:["research writing","synthesis","organization"]},
      {n:"Drafting a research-based argument", f:"using credible sources to support an original, qualified position", a:"draft", v:["claim","evidence","qualification"]},
      {n:"Presenting findings transparently", f:"communicating methods, evidence, limits, and citations so an audience can evaluate findings", a:"present", v:["transparency","method","limitation"]}
    ]
  },
  {
    name: "Media Literacy and Digital Communication",
    code: "media-literacy",
    gradeBand: "Grade 8 media literacy",
    lessons: [
      {n:"Identifying a media message's purpose", f:"distinguishing whether a message aims to inform, persuade, entertain, or provoke", a:"identify", v:["purpose","message","audience"]},
      {n:"Identifying target audience cues", f:"using design, language, and platform choices to infer intended audiences", a:"infer", v:["target audience","cue","demographic"]},
      {n:"Analyzing image framing and angle", f:"explaining how visual choices direct attention and suggest a viewpoint", a:"analyze", v:["framing","angle","composition"]},
      {n:"Analyzing color and typography", f:"explaining how visual design choices influence tone, readability, and credibility", a:"analyze", v:["palette","typography","tone"]},
      {n:"Reading charts without overclaiming", f:"describing what a graph shows while checking labels, scale, and missing context", a:"interpret", v:["scale","axis","context"]},
      {n:"Spotting misleading data displays", f:"identifying truncated axes, selective ranges, and visual distortions", a:"identify", v:["distortion","truncated axis","proportion"]},
      {n:"Recognizing sponsored content", f:"finding disclosures and commercial relationships behind apparently ordinary content", a:"recognize", v:["sponsorship","disclosure","advertising"]},
      {n:"Analyzing influencer persuasion", f:"evaluating endorsements, parasocial trust, and product claims", a:"evaluate", v:["endorsement","influencer","parasocial"]},
      {n:"Tracing a claim to its source", f:"locating the original evidence behind a reposted assertion", a:"trace", v:["original source","repost","provenance"]},
      {n:"Checking an image's context", f:"verifying when, where, and why an image was created before sharing it", a:"verify", v:["context","reverse image search","caption"]},
      {n:"Distinguishing satire from misinformation", f:"using source, cues, and purpose to classify deceptive-looking content", a:"distinguish", v:["satire","misinformation","intent"]},
      {n:"Recognizing algorithmic curation", f:"explaining how platform systems can shape what information a user sees", a:"explain", v:["algorithm","feed","filter bubble"]},
      {n:"Comparing coverage across outlets", f:"identifying differences in framing, sourcing, omission, and headline language", a:"compare", v:["framing","omission","headline"]},
      {n:"Writing an accessible digital post", f:"making a short digital message clear through structure, citations, and alt text", a:"write", v:["accessibility","alt text","caption"]},
      {n:"Using copyright and fair use responsibly", f:"making careful choices about credit, permission, and transformative use", a:"apply", v:["copyright","fair use","attribution"]},
      {n:"Protecting privacy in digital publication", f:"recognizing personal information and consent concerns before publishing", a:"protect", v:["privacy","consent","digital footprint"]},
      {n:"Participating in civil online discussion", f:"responding to disagreement with evidence, clarity, and respect", a:"participate", v:["netiquette","dialogue","moderation"]},
      {n:"Designing a balanced media message", f:"combining accurate evidence, ethical persuasion, and audience-aware design", a:"design", v:["balance","credibility","design"]}
    ]
  },
  {
    name: "High-School Bridge: Independent Literacy",
    code: "bridge",
    gradeBand: "Grade 8 to Grade 9 bridge",
    lessons: [
      {n:"Reading an unfamiliar complex text independently", f:"using a purposeful first read, annotation, and reread to understand a demanding text", a:"navigate", v:["complex text","reread","strategy"]},
      {n:"Managing academic vocabulary in context", f:"using morphology, context, and reference tools to learn disciplinary words", a:"manage", v:["academic vocabulary","morphology","context"]},
      {n:"Writing an analytical paragraph with depth", f:"developing a claim, precise evidence, and layered commentary in one paragraph", a:"write", v:["analysis","commentary","depth"]},
      {n:"Building a line of reasoning across paragraphs", f:"linking paragraphs so each one advances a larger analytical argument", a:"build", v:["line of reasoning","cohesion","progression"]},
      {n:"Using nuanced thesis language", f:"writing claims that account for complexity, tension, and qualification", a:"use", v:["nuance","tension","qualification"]},
      {n:"Entering a scholarly conversation", f:"using sources to extend, complicate, or challenge an idea respectfully", a:"enter", v:["scholarly conversation","synthesis","response"]},
      {n:"Evaluating methodology and evidence limits", f:"asking how a source's methods and limits affect the strength of its conclusions", a:"evaluate", v:["methodology","limitation","validity"]},
      {n:"Preparing for a seminar discussion", f:"bringing text-based ideas, questions, and responses that move a discussion forward", a:"prepare", v:["seminar","discussion","textual evidence"]},
      {n:"Listening and building on ideas", f:"responding to peers by paraphrasing, connecting, and respectfully challenging", a:"listen", v:["paraphrase","build on","challenge"]},
      {n:"Presenting a claim orally", f:"adapting an evidence-based claim for listeners through pacing and emphasis", a:"present", v:["delivery","emphasis","audience"]},
      {n:"Reading across disciplines", f:"adjusting reading strategies for literary, historical, scientific, and technical texts", a:"adapt", v:["discipline","technical text","strategy"]},
      {n:"Interpreting technical procedures", f:"following multi-step directions while noticing conditions, warnings, and precision", a:"interpret", v:["procedure","condition","precision"]},
      {n:"Writing a formal email", f:"communicating a clear purpose, context, and respectful request in professional correspondence", a:"write", v:["subject line","salutation","tone"]},
      {n:"Planning long-term writing work", f:"breaking a multi-stage assignment into research, drafting, revision, and editing milestones", a:"plan", v:["milestone","timeline","workflow"]},
      {n:"Using feedback to set a revision goal", f:"sorting feedback into a specific, actionable priority for the next draft", a:"use", v:["feedback","priority","revision goal"]},
      {n:"Self-assessing with a rubric", f:"using criteria and textual evidence to judge work honestly before submission", a:"self-assess", v:["rubric","criterion","evidence"]},
      {n:"Building an independent reading identity", f:"selecting, sustaining, and reflecting on challenging independent reading", a:"build", v:["independent reading","stamina","reflection"]},
      {n:"Creating a Grade 9 literacy action plan", f:"setting concrete reading, writing, language, and research goals for high school", a:"create", v:["action plan","goal","transfer"]}
    ]
  }
];

function buildLesson(unit, item, index, previousTitle) {
  const [termOne, termTwo, termThree] = item.v;
  const review = previousTitle
    ? `Reconnect to “${previousTitle}” by carrying its strategy into this next step.`
    : "Use this short repair sequence to establish the habits needed for Grade 8 ELA.";
  const stage = `${unit.name}, lesson ${index + 1}`;
  return {
    unit: unit.name,
    title: item.n,
    objective: `Students will ${item.a} ${item.f}.`,
    review,
    skillTags: [unit.code, "grade-8-ela", item.a, termOne],
    prerequisites: previousTitle ? [previousTitle] : [],
    vocabulary: [termOne, termTwo, termThree],
    explanation: [
      `${stage} focuses on ${item.f}. Strong readers and writers do not rely on a first impression; they name what the text or draft actually does, then use that observation to make a supportable decision. The terms ${termOne}, ${termTwo}, and ${termThree} give students precise language for that work.`,
      `A dependable method is to locate a specific feature, describe its context, and explain its effect or function. Students should pause before labeling an example, test the label against nearby details, and state the connection in a complete sentence. This sequence keeps ${item.n.toLowerCase()} grounded in evidence rather than a guess.`,
      `Transfer matters because the same move appears in reading, discussion, and writing. After making a decision, students should reread for exceptions, revise unclear wording, and explain why another reader could follow the reasoning. The goal is not merely to use ${termOne}; it is to make a clear, accurate choice that improves understanding.`
    ],
    examples: [
      {
        prompt: `A student is working on ${item.n.toLowerCase()} in a passage where a speaker says, “I folded the map twice before choosing the longer road.” Show how the student can use the detail responsibly.`,
        steps: [
          `Underline the exact detail: “folded the map twice” and “choosing the longer road.”`,
          `Use the surrounding situation to consider how that detail relates to ${item.f}.`,
          `State a conclusion and explain how the quoted wording supports it rather than treating it as proof by itself.`
        ],
        answer: `The student can say that the speaker's careful handling of the map suggests a deliberate choice, then connect that observation to ${termOne}. The conclusion remains qualified because the detail supports an interpretation but does not reveal every motive.`
      },
      {
        prompt: `A classmate writes, “This is obvious,” after noticing a feature connected to ${item.n.toLowerCase()}. Revise the response into evidence-based academic language.`,
        steps: [
          `Replace “obvious” with a precise name for the relevant feature, such as ${termOne}.`,
          `Add a concrete detail from the text, draft, or media message being examined.`,
          `Explain the relationship between that detail and the conclusion using ${termTwo} or ${termThree}.`
        ],
        answer: `One defensible revision is: “The detail supports this interpretation because it creates a clear ${termOne} in context; the reader can trace the connection through the speaker's choice.” The revision identifies evidence, uses a course term, and supplies reasoning.`
      }
    ]
  };
}

export const elaSequence = units.flatMap((unit) =>
  unit.lessons.map((item, index) => {
    const earlierUnits = units.slice(0, units.indexOf(unit)).flatMap((priorUnit) => priorUnit.lessons);
    const previous = index > 0
      ? unit.lessons[index - 1].n
      : earlierUnits.length > 0
        ? earlierUnits[earlierUnits.length - 1].n
        : null;
    return buildLesson(unit, item, index, previous);
  })
);

if (elaSequence.length !== 169) {
  throw new Error(`ELA sequence must contain 169 lessons; found ${elaSequence.length}.`);
}
