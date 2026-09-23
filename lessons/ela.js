export const elaLessons = [
  {
    id: 'ela-strongest-evidence', grade: 8, subject: 'ELA',
    title: 'Choose the strongest evidence for an inference',
    objective: 'Connect a reasonable inference to the detail that supports it most directly, rather than to a detail that is merely related.',
    learn: [
      'An inference is an idea you work out from clues rather than a fact the author states directly. If a character checks the clock repeatedly while waiting for a visitor, you might infer that the visit matters to the character. You cannot yet infer whether the visitor is a friend or an enemy. A sound inference stays within what the details can support.',
      'Start by putting the inference into your own words. Then examine each possible piece of evidence and ask, “How does this detail make that idea more likely?” A detail about the setting may be true without supporting the inference. Strong evidence creates a clear bridge between what the text says and what you conclude.',
      'When several details fit, compare their strength. An action that costs a character time or effort often reveals more than a general description. A repeated pattern can be stronger than one ambiguous moment. Do not automatically choose the longest quotation, the most dramatic detail, or a sentence that shares a word with the question.',
      'Explain your choice with a because statement: “This detail supports the inference because…” Name the action and the idea it reveals. Also check for limits. Evidence that someone practiced carefully supports preparation; it does not prove that the person will win. Distinguishing support from proof helps you avoid stretching the text.'
    ],
    examples: [
      {
        prompt: 'Read: At the shelter, Imani was assigned to stack clean towels. A volunteer mentioned that a nervous dog would not approach its bowl. After finishing the towels, Imani sat several feet from the kennel and read quietly. She stayed even after her friends left. When the dog finally stepped forward, she kept her voice low and did not reach through the bars. Which detail most strongly supports the inference that Imani is patient with frightened animals?',
        steps: ['Name the inference: Imani can wait without pressuring a frightened animal.', 'Separate background from evidence: stacking towels tells us her assignment, not how she responds to fear.', 'Compare her choices: remaining quietly after her friends leave shows that she gives up time and lets the dog set the pace.'],
        answer: 'She stayed quietly after her friends left. Waiting without forcing contact directly demonstrates patience.'
      },
      {
        prompt: 'Read: The student newspaper printed a claim that the cafeteria wasted forty trays of food each day. Before repeating it, Marco asked where the number came from. He discovered that someone had counted trays on a single field-trip day. He visited on three ordinary days, recorded the totals, and asked the cafeteria manager how leftovers were handled. His article reported both the counts and their limits. Which detail best supports the inference that Marco values accuracy?',
        steps: ['Identify the quality being inferred: accuracy means checking whether a claim is supported.', 'Notice that publishing an article alone would not establish accuracy; a writer can publish unchecked claims.', 'Select the investigation that tests the original number under more typical conditions, rather than simply repeating it.'],
        answer: 'He counted on three ordinary days and asked how leftovers were handled. These checks show an effort to verify the claim and understand what the numbers mean.'
      }
    ],
    guided: {
      id: 'g1',
      prompt: 'Read: Rain tapped the windows as the robotics club packed up. Ava placed the unfinished robot on a shelf, then noticed that its wheel still rubbed against the frame. She took off her coat, borrowed a ruler, and measured the gap again. The late bus would leave in fifteen minutes. “I can test one smaller spacer before I go,” she told her partner. Which detail best supports the inference that Ava is determined to improve the robot?',
      options: ['She takes off her coat and measures the wheel gap again after packing up.', 'Rain taps the windows while the club packs up.', 'The late bus will leave in fifteen minutes.', 'She places the unfinished robot on a shelf.'],
      answer: 'She takes off her coat and measures the wheel gap again after packing up.',
      accepted: ['She takes off her coat and measures the wheel gap again after packing up.'],
      hint: 'Look for a choice that requires extra effort to address the problem.',
      explanation: 'Restarting the work instead of leaving shows persistence directed at a specific improvement. The weather and bus time provide context but do not themselves show determination.',
      steps: ['Restate what “determined to improve” would look like in an action.', 'Find the details that describe Ava choosing to do something, rather than details about her surroundings.', 'Compare those actions and decide which most directly addresses the remaining problem.']
    },
    practice: [
      {
        id: 'p1',
        prompt: 'Read: When the trail split, Ben pointed toward the wider path. Nora unfolded the map and studied the contour lines. “That route climbs sharply before the bridge,” she said. She checked the distance to the next water station and asked how much water everyone had left. Only then did she suggest the shaded path along the creek. Ben folded his walking stick and nodded. Which detail best supports the inference that Nora considers the group’s safety?',
        options: ['Ben points toward the wider path.', 'Nora checks the next water station and everyone’s remaining water before suggesting a route.', 'Nora unfolds a map at the split.', 'Ben folds his walking stick and nods.'],
        answer: 'Nora checks the next water station and everyone’s remaining water before suggesting a route.',
        accepted: ['Nora checks the next water station and everyone’s remaining water before suggesting a route.'],
        hint: 'Which action connects the route decision to the hikers’ needs?',
        explanation: 'Checking water supplies and access shows concern for whether the group can travel safely. Merely unfolding a map could serve many purposes.'
      },
      {
        id: 'p2',
        prompt: 'Read: Luis had planned a comic strip about the school garden. During lunch, his partner suggested using photographs instead. Luis began to object, then asked her to show him a sample. He noticed that the photos made the planting steps easier to follow. That afternoon, he rewrote his captions to fit her pictures and credited her idea on the opening page. Which detail most strongly supports the inference that Luis can reconsider his own ideas?',
        options: ['He plans a comic strip about the school garden.', 'His partner speaks with him during lunch.', 'He rewrites his captions to fit the photographs after seeing their advantage.', 'The opening page includes captions.'],
        answer: 'He rewrites his captions to fit the photographs after seeing their advantage.',
        accepted: ['He rewrites his captions to fit the photographs after seeing their advantage.'],
        hint: 'Look for evidence of a changed decision, not just an opportunity to change.',
        explanation: 'Reworking his captions shows that Luis acts on a better idea even though it replaces his original plan. Hearing a suggestion alone would not establish that.'
      },
      {
        id: 'p3',
        prompt: 'Read: At rehearsal, the director asked whether anyone could cover a missing actor’s lines. Tessa looked down at her script. She had practiced the part at home but had never spoken alone onstage. When no one answered, she raised her hand. Her first sentence shook, yet she finished the scene and asked to try it again with the stage lights on. Which detail best supports the inference that Tessa acts despite feeling nervous?',
        options: ['The director asks for someone to cover a part.', 'Tessa practices the part at home.', 'No one answers the director immediately.', 'Tessa finishes the scene even though her first sentence shakes.'],
        answer: 'Tessa finishes the scene even though her first sentence shakes.',
        accepted: ['Tessa finishes the scene even though her first sentence shakes.'],
        hint: 'The strongest detail should show both discomfort and a response to it.',
        explanation: 'The shaking voice signals nervousness, while finishing shows that nervousness does not stop her. Preparation alone does not show how she responds onstage.'
      },
      {
        id: 'p4',
        prompt: 'Read: The library display listed a local inventor’s award as a national prize. On his way home, Eli found the original announcement online: the award had been regional. The display was already printed, and his name appeared beneath it. The next morning he brought a corrected label and asked the librarian to replace the old one before visitors arrived. Which detail most strongly supports the inference that Eli accepts responsibility for a mistake?',
        options: ['He brings a corrected label and asks to replace the one bearing his name.', 'He reads the original announcement online.', 'The display describes a local inventor.', 'The award was regional rather than national.'],
        answer: 'He brings a corrected label and asks to replace the one bearing his name.',
        accepted: ['He brings a corrected label and asks to replace the one bearing his name.'],
        hint: 'Finding an error and taking responsibility for it are different actions.',
        explanation: 'Eli repairs the error in work associated with him instead of leaving it for someone else. Discovering the correct fact is necessary, but the repair best supports responsibility.'
      },
      {
        id: 'p5',
        prompt: 'Read: Suri usually finished her sketchbook pages quickly. Today she erased the same small corner of a portrait four times. She held the drawing beside a photograph, moved the lamp, and studied the shadow below the subject’s eye. When her brother invited her outside, she said she wanted to settle that one shape first. The rest of the page was already complete. Which detail best supports the inference that Suri is paying close attention to visual accuracy?',
        options: ['She usually finishes sketchbook pages quickly.', 'She compares the drawing with a photograph and studies one shadow.', 'Her brother invites her outside.', 'Most of the page is complete.'],
        answer: 'She compares the drawing with a photograph and studies one shadow.',
        accepted: ['She compares the drawing with a photograph and studies one shadow.'],
        hint: 'Which detail shows what she is trying to get right, not simply that she is spending time?',
        explanation: 'Comparing the portrait with a reference and studying a precise shadow directly connect her effort to accuracy. The invitation and completed areas do not explain that goal.'
      },
      {
        id: 'p6',
        prompt: 'Read: After the debate, Malik put his trophy beside the classroom window. During cleanup, he found Priya reviewing the judges’ notes. “Your question exposed the weakest part of our case,” he told her. He asked permission to copy her research checklist for the next tournament. Before leaving, he thanked the timekeeper and carried two chairs to the storage room. Which detail best supports the inference that Malik respects an opponent’s skill?',
        options: ['He places his trophy beside a window.', 'He helps carry chairs to storage.', 'He identifies the strength of Priya’s question and asks to use her research checklist.', 'He thanks the timekeeper before leaving.'],
        answer: 'He identifies the strength of Priya’s question and asks to use her research checklist.',
        accepted: ['He identifies the strength of Priya’s question and asks to use her research checklist.'],
        hint: 'Focus on his response to the opponent’s work rather than his general politeness.',
        explanation: 'Malik recognizes a specific strength and wants to learn from it. Helping with chairs shows helpfulness, not necessarily respect for an opponent’s debating ability.'
      }
    ],
    notebook: {
      prompt: 'Read: Jun agreed to repair a neighbor’s bicycle before Saturday. On Friday, a friend offered him a spare ticket to a game. Jun checked the bicycle and discovered that the replacement brake cable did not fit. He called two shops, walked to the one with the right cable, and finished the repair that evening. On Saturday, he showed the neighbor how to test the brakes. Write a paragraph explaining one reasonable inference about Jun. Use two details, explain which is strongest, and name one conclusion the passage does not support. Self-check your reasoning; this response is not automatically scored.',
      checklist: ['I state a reasonable inference rather than just retelling an action.', 'I connect two accurate details to the inference and explain why one is especially strong.', 'I identify a limit without inventing information beyond the passage.'],
      sample: 'Jun appears dependable because he takes steps to keep his promise when the repair becomes difficult. Calling two shops and walking to get the correct cable shows that he works around a problem rather than abandoning the bicycle. Finishing on Friday also keeps the promised Saturday deadline. Finding the cable is the stronger detail because it reveals how he responds to an obstacle. The passage does not establish that Jun always keeps every promise or that he is a professional mechanic.'
    }
  },
  {
    id: 'ela-theme-development', grade: 8, subject: 'ELA',
    title: 'Trace how a theme develops',
    objective: 'Explain how a character’s response to a conflict and its outcome develop a theme across a story.',
    learn: [
      'A topic is a broad subject, such as friendship, courage, or fairness. A theme is an insight a story develops about that subject. “Friendship” names a topic; “Trust grows when friends admit mistakes” expresses a possible theme. A theme should fit the story without naming only its particular characters or events.',
      'Trace three points: the situation at the beginning, the character’s important response to a conflict, and the outcome. Ask what the character learns or what the consequences reveal. A change in behavior can develop a theme, but a character does not have to change; the results of refusing to change can also reveal an insight.',
      'Treat a proposed theme like a claim that needs evidence from more than one moment. A sentence about teamwork is weak if it fits only a single friendly conversation but ignores the ending. A strong theme explains the relationship among the problem, the choices, and the result. More than one theme may be reasonable when each is supported.',
      'Avoid turning every theme into an absolute rule. Words such as always, never, and everyone often claim more than one story can show. Themes can be complex: asking for help can strengthen independence, or winning recognition can matter less than doing useful work. Explain how the story develops an insight rather than simply attaching a moral to it.'
    ],
    examples: [
      {
        prompt: 'Read: Dara wanted every panel of the mural to match her drawing. When the other painters suggested changes, she handed them brushes but kept the sketch to herself. By noon, several panels stood empty. Dara finally asked each painter to design a section around the same river. By evening, different styles flowed into one another, and neighbors paused to study details Dara would never have imagined. What theme develops?',
        steps: ['At first, Dara values control and limits other people’s contributions.', 'The empty panels expose the practical cost of that choice; asking others to design changes her approach.', 'The richer finished mural connects the change to an outcome, supporting an insight about collaboration.'],
        answer: 'Making room for others’ ideas can improve a shared project. The stalled mural becomes richer after Dara shares creative control.'
      },
      {
        prompt: 'Read: Owen hid his damaged trumpet case behind the music-room cabinet. He feared the teacher would remove him from the concert if she discovered that he had dropped it. The latch failed during rehearsal, scattering music across the floor. Owen admitted what had happened. His teacher helped him replace the latch and asked him to report equipment problems sooner. At the next rehearsal, he immediately mentioned a sticking valve. How does the ending develop a theme?',
        steps: ['Identify the original response: fear leads Owen to hide a problem.', 'Notice that hiding allows the problem to interrupt rehearsal, while honesty makes a repair possible.', 'Connect the final action to learning: Owen now reports a new problem promptly.'],
        answer: 'The ending develops the theme that admitting a problem can make solving it easier. Owen’s new willingness to speak up shows that the earlier experience changes his behavior.'
      }
    ],
    guided: {
      id: 'g1',
      prompt: 'Read: Mei thought her grandfather’s handwritten recipes were too vague to use. “A little water” could mean anything. During a visit, she watched him add water a spoonful at a time and feel the dough after each addition. Mei began writing notes about texture beside the measurements. When she later cooked alone, she adjusted the dough by touch instead of throwing it away. Which theme is best developed?',
      options: ['Following exact numbers guarantees success.', 'Old methods should replace all new methods.', 'Cooking alone prevents people from learning.', 'Learning why a method works can be more useful than following directions mechanically.'],
      answer: 'Learning why a method works can be more useful than following directions mechanically.',
      accepted: ['Learning why a method works can be more useful than following directions mechanically.'],
      hint: 'Track the change from Mei’s first reaction to her later action.',
      explanation: 'Mei moves from wanting only exact measurements to understanding how texture guides adjustments. Her successful adaptation develops the value of understanding a process.',
      steps: ['Describe what Mei distrusts at the beginning.', 'Identify what observing her grandfather teaches her beyond a measurement.', 'Choose an insight that connects that learning to her final independent action.']
    },
    practice: [
      {
        id: 'p1',
        prompt: 'Read: The running club passed Tomas every afternoon. He tried to match their speed on Monday and quit after one lap. On Tuesday, he chose a pace he could hold and marked his distance in a notebook. Weeks later, he still finished behind the club, but he completed the entire route without stopping. He circled the distance, not his place, before heading home. Which theme best fits the whole passage?',
        options: ['Progress can be meaningful even when it does not make someone the best.', 'Competition prevents every kind of improvement.', 'Natural talent matters more than practice.', 'Finishing first is the only useful goal.'],
        answer: 'Progress can be meaningful even when it does not make someone the best.',
        accepted: ['Progress can be meaningful even when it does not make someone the best.'],
        hint: 'What does Tomas choose to measure at the end?',
        explanation: 'Tomas remains behind the club but values completing more distance. The contrast between ranking and personal improvement develops the theme.'
      },
      {
        id: 'p2',
        prompt: 'Read: Nia found a wallet beneath a festival bench. Her cousin said they could leave it because someone else would help. Nia took it to the information tent instead. There she met a vendor searching for the permit stored inside. He returned to his stall in time to open, and the workers waiting beside it began setting out bread. How does the ending develop a theme?',
        options: ['It proves that lost objects are always valuable only to their owners.', 'It shows that one responsible act can help people beyond the person directly receiving it.', 'It shows that festivals cannot operate without student volunteers.', 'It proves that refusing advice always leads to success.'],
        answer: 'It shows that one responsible act can help people beyond the person directly receiving it.',
        accepted: ['It shows that one responsible act can help people beyond the person directly receiving it.'],
        hint: 'Notice who benefits after the vendor gets the wallet back.',
        explanation: 'Returning the wallet helps the vendor reopen and allows the workers to begin. That chain of consequences extends the effect of Nia’s choice beyond one person.'
      },
      {
        id: 'p3',
        prompt: 'Read: Andre memorized difficult words for the spelling contest but skipped the ordinary ones. During practice, he laughed when his sister offered to review a short list. At the contest, he spelled an unfamiliar scientific word correctly, then missed a common word with a doubled letter. The next week, he asked his sister to begin their practice with the list he had dismissed. Which pair of moments most clearly develops a theme about humility?',
        options: ['Andre enters a contest, and his sister owns a word list.', 'Andre learns a scientific word, and the contest takes place the next week.', 'Andre dismisses a simple review, then later asks to practice the material he dismissed.', 'Andre practices alone, and an audience hears him spell.'],
        answer: 'Andre dismisses a simple review, then later asks to practice the material he dismissed.',
        accepted: ['Andre dismisses a simple review, then later asks to practice the material he dismissed.'],
        hint: 'A useful pair should reveal a change in his attitude toward learning.',
        explanation: 'The two moments contrast pride with a willingness to learn from a mistake. Some other options include invented details or moments that do not establish the change.'
      },
      {
        id: 'p4',
        prompt: 'Read: The chess team’s captain, Alia, saved every difficult match for herself. Her teammates mostly watched and carried the boards. When Alia missed a tournament, the team struggled to plan its moves. Afterward, she began letting each teammate lead a practice match and explain a strategy. By spring, the team could compete confidently whether or not Alia was present. Which statement is a theme rather than merely a topic or a plot detail?',
        options: ['Leadership and chess.', 'Alia misses one tournament.', 'The team practices during the school year.', 'Effective leadership helps others become capable without the leader.'],
        answer: 'Effective leadership helps others become capable without the leader.',
        accepted: ['Effective leadership helps others become capable without the leader.'],
        hint: 'Look for a complete insight that applies beyond these specific events.',
        explanation: 'The final choice expresses a general insight supported by the team’s movement from dependence to confidence. The other choices name a subject or an event.'
      },
      {
        id: 'p5',
        prompt: 'Read: Caleb’s neighbor objected when the skate group requested a ramp in the park. Caleb assumed she disliked teenagers. At a meeting, she described the steep curb that blocked her wheelchair near the proposed site. The group revised its drawing to include an accessible path. She supported the new plan and offered to help present it. Which theme does the change in their relationship support?',
        options: ['Listening to a person’s reasons can turn disagreement into cooperation.', 'People who disagree usually want exactly the same thing.', 'Plans improve only when their original goals are abandoned.', 'Public meetings settle every disagreement immediately.'],
        answer: 'Listening to a person’s reasons can turn disagreement into cooperation.',
        accepted: ['Listening to a person’s reasons can turn disagreement into cooperation.'],
        hint: 'What becomes possible once Caleb learns the reason for the objection?',
        explanation: 'Understanding the access concern lets the group revise rather than abandon the ramp plan. The neighbor’s later support develops a theme about listening across disagreement.'
      },
      {
        id: 'p6',
        prompt: 'Read: Elena planted a packet of seeds and searched the soil for sprouts the next morning. After three days, she wanted to dig them up and begin again. Her aunt suggested recording moisture and sunlight instead. Elena kept the conditions steady, even when the pot looked unchanged. A week later, the first shoots appeared, and she left the remaining seeds undisturbed. Which ending detail best develops the theme that patience includes steady care?',
        options: ['Elena owns a packet of seeds.', 'Elena leaves the remaining seeds undisturbed after maintaining their growing conditions.', 'Elena searches the soil the morning after planting.', 'Her aunt notices that the pot looks unchanged.'],
        answer: 'Elena leaves the remaining seeds undisturbed after maintaining their growing conditions.',
        accepted: ['Elena leaves the remaining seeds undisturbed after maintaining their growing conditions.'],
        hint: 'Look for an ending action that contrasts with Elena’s earlier impatience.',
        explanation: 'Elena now allows time for growth while providing care, instead of repeatedly disrupting the seeds. The changed action completes the development of the theme.'
      }
    ],
    notebook: {
      prompt: 'Read: Ravi wanted the town history exhibit to feature only famous people. His partner interviewed a retired bus driver who had carried residents to temporary shelters during a flood. Ravi first called the story too ordinary. Then he studied the driver’s handwritten route changes and the letters passengers had saved. Ravi placed those items at the center of the exhibit and invited the driver to speak. Write a paragraph stating a theme and tracing its development through the beginning, a turning point, and the ending. Self-check; no automatic writing score is assigned.',
      checklist: ['My theme is a complete insight, not a one-word topic.', 'I use accurate details from the beginning, middle, and ending.', 'I explain how the details develop the insight instead of only listing events.'],
      sample: 'Important contributions do not always come from famous people. At first, Ravi treats fame as the measure of whose history deserves attention, so he dismisses the bus driver’s experience. The route notes and passengers’ letters make the driver’s practical help visible. Those objects change what Ravi values. By placing them at the exhibit’s center and inviting the driver, he recognizes the importance of work he once called ordinary. His changed judgment develops the theme across the story.'
    }
  },
  {
    id: 'ela-objective-summary', grade: 8, subject: 'ELA',
    title: 'Write an objective summary',
    objective: 'Select the central idea and essential developments while leaving out opinions, minor details, and unsupported conclusions.',
    learn: [
      'An objective summary is a short, accurate account of a text’s central idea and most important supporting points. It tells what the text communicates, not whether you liked it. A reader who has not seen the original should understand the main situation or idea without having to sort through every example.',
      'First identify what the whole text is mainly about and what it says about that subject. Then choose the developments needed to explain that idea. In an informational text, these may be a problem, a response, and the results or limits. In a story, they may be a central conflict, important choices, and an outcome. Keep the relationships among these points intact.',
      'Summarize in your own words while preserving the author’s meaning. Combine related details into broader statements when possible: three examples of checking a water supply might become “the team monitored water conditions.” Do not make the result sound more certain than it is. A plan to expand is not an expansion that has already happened.',
      'Check for opinion words such as wonderful, foolish, obviously, or should when they express your judgment rather than the text’s content. If an opinion is important to the original, attribute it: “Residents argued that the park needed repairs.” Objective does not mean pretending everyone agrees; it means reporting ideas and disagreements without adding your own verdict.'
    ],
    examples: [
      {
        prompt: 'Read: Harbor School replaced disposable lunch trays with washable ones for a six-week trial. Students initially needed extra time to sort scraps from utensils. Staff added picture labels above the bins, and sorting became faster. The school used fewer trash bags, but the dishwasher consumed more water than expected. Administrators decided to compare the added water cost with the reduced waste before making the change permanent. Give an objective summary.',
        steps: ['Identify the main subject: a trial of reusable trays and its results.', 'Keep the mixed outcome: trash decreased, but water use raised a concern.', 'Include the next decision without claiming the school has already made the change permanent.'],
        answer: 'Harbor School tested washable lunch trays, improving sorting with picture labels and reducing trash. Because water use increased, administrators will compare the costs and benefits before deciding whether to keep the system.'
      },
      {
        prompt: 'Read: During repairs to a town clock, workers discovered notes tucked behind its face. The notes recorded maintenance visits over nearly a century, including a period when replacement parts were difficult to obtain. A local museum photographed the fragile pages and interviewed former repair workers. The originals will be stored away from light, while digital copies will let visitors explore how the clock was maintained. Which information belongs in a brief summary?',
        steps: ['Find the central development: repair notes become a historical resource.', 'Connect discovery to preservation and access, which explain why the discovery matters in this account.', 'Leave out guesses about whether the clock is beautiful or whether the notes are worth money.'],
        answer: 'Workers found historical maintenance notes inside a town clock. A museum is preserving the originals and creating digital access to the records of the clock’s care.'
      }
    ],
    guided: {
      id: 'g1',
      prompt: 'Read: A neighborhood group mapped summer temperatures along twelve streets. Blocks with mature trees were generally cooler than nearby blocks with little shade. The group shared its map with city planners, who identified places where underground pipes would limit planting. Residents and planners then selected four suitable blocks for new trees. They will repeat the temperature measurements as the trees grow. Which is the most objective summary?',
      options: ['Residents proved that planting trees immediately eliminates dangerous summer heat.', 'City planners delayed a wonderful tree project by worrying about underground pipes.', 'Residents mapped neighborhood heat, worked with planners to choose suitable tree-planting sites, and plan to monitor future temperatures.', 'Twelve streets had temperatures, several streets had pipes, and four blocks were selected.'],
      answer: 'Residents mapped neighborhood heat, worked with planners to choose suitable tree-planting sites, and plan to monitor future temperatures.',
      accepted: ['Residents mapped neighborhood heat, worked with planners to choose suitable tree-planting sites, and plan to monitor future temperatures.'],
      hint: 'Keep the investigation, response, and planned follow-up without inventing an outcome.',
      explanation: 'The correct summary connects the main steps and preserves the fact that future effects will be measured. The alternatives add judgment, exaggerate the result, or list details without the central relationship.',
      steps: ['State the project’s main purpose in a few words.', 'Identify what residents learned, what action followed, and what remains to be measured.', 'Check each choice for opinions, unsupported certainty, and missing connections.']
    },
    practice: [
      {
        id: 'p1',
        prompt: 'Read: A museum offered visitors audio descriptions of six paintings. The recordings described colors, positions, and textures rather than assuming visitors could see them. Test listeners requested clearer directions about where each description began. After revisions, the museum made the recordings available on borrowed devices and personal phones. Staff will collect feedback before creating descriptions for the rest of the collection. Which summary best preserves the central idea?',
        options: ['The museum described colors and textures in six paintings, all of which visitors disliked.', 'Personal phones are clearly the best way for every visitor to experience art.', 'The museum has completed audio descriptions for its entire collection.', 'The museum tested and revised audio descriptions to improve access to paintings and will gather feedback before expanding the project.'],
        answer: 'The museum tested and revised audio descriptions to improve access to paintings and will gather feedback before expanding the project.',
        accepted: ['The museum tested and revised audio descriptions to improve access to paintings and will gather feedback before expanding the project.'],
        hint: 'Distinguish the current limited project from a possible future expansion.',
        explanation: 'The summary includes the purpose, revision, and next step. It does not claim that every painting is covered or add a judgment about the best technology.'
      },
      {
        id: 'p2',
        prompt: 'Read: Volunteers examined old photographs of a riverbank to compare them with current images. They found that a bend had moved gradually toward a road. Engineers said the photographs were useful but could not show changes in underwater depth. The town approved a detailed survey before deciding whether the road needed protection. A blue folder in the archive held most of the earliest photographs. Which detail should a concise summary most likely omit?',
        options: ['The earliest photographs were stored in a blue folder.', 'The river bend had moved toward a road.', 'Photographs could not reveal underwater depth changes.', 'The town approved a survey before choosing a response.'],
        answer: 'The earliest photographs were stored in a blue folder.',
        accepted: ['The earliest photographs were stored in a blue folder.'],
        hint: 'Which fact can disappear without changing the explanation of the problem and response?',
        explanation: 'The folder’s color and storage role do not explain the river’s movement, the evidence limit, or the town’s decision. Those other details preserve the central development.'
      },
      {
        id: 'p3',
        prompt: 'Read: The student council proposed extending the library’s lunch hours. Some students wanted a quiet place to read; others needed access to printers. Librarians supported a trial but said an adult supervisor would be needed. For one month, teachers volunteered in shifts. The council will review attendance and staffing demands before requesting a permanent schedule change. Which sentence could replace an opinion-heavy summary sentence?',
        options: ['The council’s brilliant plan rescued students from the terrible lunch schedule.', 'The council tested longer library access with volunteer supervision and will evaluate use and staffing before seeking a permanent change.', 'The librarians obviously should keep the library open because all students need printers.', 'The trial proved that longer hours require no extra work.'],
        answer: 'The council tested longer library access with volunteer supervision and will evaluate use and staffing before seeking a permanent change.',
        accepted: ['The council tested longer library access with volunteer supervision and will evaluate use and staffing before seeking a permanent change.'],
        hint: 'Look for neutral wording that includes both the trial and its evaluation.',
        explanation: 'This choice reports the project and remaining decision without praise, blame, or invented results. The trial still requires supervision, and no permanent decision has been made.'
      },
      {
        id: 'p4',
        prompt: 'Read: A mountain rescue team began lending hikers small emergency beacons. Unlike phones, the beacons could send a location signal where cell service failed. Rangers taught borrowers that a beacon did not replace warm clothing, water, or a route plan. During the first season, two lost groups used the devices to request help. The team plans to continue lending them while tracking maintenance costs. Which summary is accurate without exaggerating?',
        options: ['Emergency beacons make hiking safe even without supplies or planning.', 'Two lost groups proved that phones should never be taken into the mountains.', 'A rescue team lends location beacons for emergencies, teaches their limits, and will continue the program while monitoring costs.', 'Rangers stopped all rescue training after the beacons worked twice.'],
        answer: 'A rescue team lends location beacons for emergencies, teaches their limits, and will continue the program while monitoring costs.',
        accepted: ['A rescue team lends location beacons for emergencies, teaches their limits, and will continue the program while monitoring costs.'],
        hint: 'The text presents a useful tool, not a replacement for preparation.',
        explanation: 'The correct summary keeps the program’s benefit and its limits. The alternatives turn a limited success into claims the text never makes.'
      },
      {
        id: 'p5',
        prompt: 'Read: Lena promised to bring a model bridge to the science fair. On the morning of the fair, one support snapped. She considered covering the crack with paper, then rebuilt the support using a wider base. Her display arrived late, but she added photographs of the failed design and explained why the change worked. Several visitors asked about the comparison between the two versions. Which is the best objective summary?',
        options: ['Lena’s bridge was clearly the finest project at the science fair.', 'A support snapped in the morning, and visitors later asked questions.', 'Lena covered a crack and won a prize for her flawless model.', 'After her bridge model broke, Lena repaired its design and used the failure and revision to explain her work at the fair.'],
        answer: 'After her bridge model broke, Lena repaired its design and used the failure and revision to explain her work at the fair.',
        accepted: ['After her bridge model broke, Lena repaired its design and used the failure and revision to explain her work at the fair.'],
        hint: 'Include the problem, her important choice, and the resulting presentation.',
        explanation: 'The correct summary connects the central conflict to Lena’s response and presentation. It neither invents a prize nor judges the project’s quality.'
      },
      {
        id: 'p6',
        prompt: 'Read: Residents disagreed about a proposed night market. Supporters said it could help small businesses reach new customers. Opponents worried about noise near apartments. The council approved a three-evening trial with an earlier closing time than organizers first requested. Afterward, members will examine sales reports and resident complaints before deciding whether to allow a regular market. Which summary handles the disagreement objectively?',
        options: ['The council approved a limited night-market trial after residents raised business benefits and noise concerns; it will review results before deciding on regular operation.', 'The council ignored unreasonable neighbors to support hardworking businesses.', 'Residents agreed that the night market would solve the town’s business problems.', 'Noise complaints forced the council to reject the night market permanently.'],
        answer: 'The council approved a limited night-market trial after residents raised business benefits and noise concerns; it will review results before deciding on regular operation.',
        accepted: ['The council approved a limited night-market trial after residents raised business benefits and noise concerns; it will review results before deciding on regular operation.'],
        hint: 'Attribute both sides fairly and preserve the difference between a trial and a final decision.',
        explanation: 'The summary accurately reports competing concerns, the limited approval, and the pending decision. Objective writing can include disagreement without taking a side.'
      }
    ],
    notebook: {
      prompt: 'Read: A coastal school began a project to document litter on its nearby beach. Students marked equal sections, counted discarded items, and noted the dates and tides. Plastic food wrappers appeared most often. A cleanup removed the existing litter, while signs near the entrance asked visitors to use covered bins. The students will repeat their counts monthly because one cleanup cannot show whether less litter is arriving. Write a two- or three-sentence objective summary. Then identify one detail you omitted and explain why. Use the checklist rather than an automatic writing score.',
      checklist: ['I identify the project’s main purpose and its important findings or actions.', 'I preserve the need for follow-up without claiming the litter problem is solved.', 'I use neutral, original wording and justify omitting a minor detail.'],
      sample: 'Students surveyed beach litter, found food wrappers most common, and followed the survey with a cleanup and signs encouraging proper disposal. They will keep measuring litter to learn whether the amount arriving changes. I omitted the fact that the signs stood near the entrance because their exact placement is less important to the central account than the need to measure results over time.'
    }
  },
  {
    id: 'ela-conflicting-accounts', grade: 8, subject: 'ELA',
    title: 'Compare conflicting accounts',
    objective: 'Identify the precise point where accounts disagree and determine what evidence could clarify the difference.',
    learn: [
      'Two accounts can describe the same event differently without disagreeing about every fact. Start by separating shared facts from conflicting claims. “The gate opened at noon” and “The line was long” can both be true. “The gate opened at noon” and “The gate remained locked until one” cannot both describe the same gate on the same day accurately.',
      'Pay attention to each account’s scope: who or what it covers, where the observer stood, and when the observation occurred. A crowded front entrance and an empty side entrance are different observations, not automatically a contradiction. Words such as all, only, before, and because can create a sharper disagreement than the general topic suggests.',
      'Distinguish a disagreement about facts from a disagreement about interpretation. Two writers might accept the same attendance number but disagree about whether the event was successful. One values money raised; the other values how many new people participated. To compare them fairly, name their different standards rather than declaring one dishonest.',
      'To investigate a conflict, look for evidence that directly tests the disputed claim. A dated schedule can clarify a timing dispute; interviews alone may not establish a precise count. Consider a source’s access to the information, methods, and possible interests. An official title or confident tone does not automatically settle the matter. If the available accounts do not resolve it, say what remains uncertain.'
    ],
    examples: [
      {
        prompt: 'Read both accounts of Saturday’s garden opening. Account A, a visitor: “I arrived at the east gate at ten. It was locked, and five families waited beside me until a worker opened it at ten twenty.” Account B, the organizer: “The garden opened at ten as announced. Volunteers welcomed visitors through the west entrance while repairs continued at the east gate.” Do the accounts necessarily conflict about when any visitors could enter?',
        steps: ['Identify each observer’s location: the visitor describes the east gate; the organizer describes the west entrance.', 'Separate a claim about one gate from a claim about access to the entire garden.', 'Check whether both statements could be true at once before labeling them contradictory.'],
        answer: 'No. The west entrance could admit visitors at ten while the east gate stayed locked until ten twenty. The accounts cover different entrances.'
      },
      {
        prompt: 'Read both accounts of a concert. Account A, the treasurer: “We sold 180 tickets, enough to cover the musicians’ fee. The concert achieved its financial goal.” Account B, the outreach chair: “We sold 180 tickets, but most went to regular supporters. The concert did not achieve our goal of attracting many first-time visitors.” What explains the different evaluations?',
        steps: ['Find the shared fact: both report 180 tickets.', 'Identify the measure of success in each account: covering costs versus reaching new visitors.', 'Explain the difference in criteria without inventing a disagreement about the ticket count.'],
        answer: 'The writers use different standards for success. One judges financial results, while the other judges outreach to new visitors.'
      }
    ],
    guided: {
      id: 'g1',
      prompt: 'Read both accounts of Monday’s bus delay. Account A, a passenger: “The bus reached our stop at 8:25, fifteen minutes after its posted time. The driver said roadwork had slowed the trip.” Account B, the route manager: “The bus reached that stop at 8:25. It left the depot fifteen minutes late because the first driver was absent; roadwork added no further delay.” Which point is actually disputed?',
      options: ['Whether the bus arrived at 8:25.', 'Whether roadwork or a late departure caused the delay.', 'Whether the posted stop time was earlier than 8:25.', 'Whether the accounts concern a bus route.'],
      answer: 'Whether roadwork or a late departure caused the delay.',
      accepted: ['Whether roadwork or a late departure caused the delay.'],
      hint: 'Compare the explanations introduced by “because” or “had slowed.”',
      explanation: 'Both accounts place arrival at 8:25 and describe a delay. They conflict about its cause: roadwork versus a late departure from the depot.',
      steps: ['Underline or mentally note facts that appear in both accounts.', 'Find the reason each account gives for the delay.', 'Choose the statement that names only the unresolved difference, not a shared fact.']
    },
    practice: [
      {
        id: 'p1',
        prompt: 'Read both accounts. Account A, the food-drive captain: “Our final tally was 420 sealed packages. Every package on the collection tables was included.” Account B, a sorting volunteer: “The final tally was announced as 420, but the thirty packages under the blue table had not yet been counted. I asked that they be added.” Which evidence would best help resolve the disagreement?',
        options: ['A photograph of the captain smiling at the drive.', 'A list of foods volunteers personally prefer.', 'The itemized tally sheets showing whether the thirty packages were included in the final total.', 'The number of people who attended last year’s drive.'],
        answer: 'The itemized tally sheets showing whether the thirty packages were included in the final total.',
        accepted: ['The itemized tally sheets showing whether the thirty packages were included in the final total.'],
        hint: 'The disputed point is whether a particular group of packages was counted.',
        explanation: 'An itemized record can connect the thirty packages to the reported total. General impressions and last year’s attendance do not test that claim.'
      },
      {
        id: 'p2',
        prompt: 'Read both accounts of a soccer match. Account A, a goalkeeper: “The field was dry during the first half. Our shoes barely picked up any mud, and the ball rolled quickly.” Account B, a spectator: “After the halftime storm, puddles formed near the benches. By the final whistle, players were slipping near the sideline.” What is the most accurate comparison?',
        options: ['The accounts directly disagree about the field during the first half.', 'The spectator proves that the goalkeeper lied about the entire match.', 'Both accounts say the field was muddy from the start.', 'The accounts describe different times, so the field conditions could have changed.'],
        answer: 'The accounts describe different times, so the field conditions could have changed.',
        accepted: ['The accounts describe different times, so the field conditions could have changed.'],
        hint: 'Locate the time markers before comparing the descriptions.',
        explanation: 'The first description applies before the storm; the second applies afterward. Different observations over time do not create a direct contradiction.'
      },
      {
        id: 'p3',
        prompt: 'Read both accounts of a new playground. Account A, a parks report: “The playground succeeded because its equipment passed inspection and the project stayed within budget.” Account B, a parent newsletter: “The equipment passed inspection, but the playground has no shaded seating. For adults supervising young children during summer, the design remains incomplete.” Why do the accounts evaluate the project differently?',
        options: ['They emphasize different criteria: safety and cost versus comfort during supervision.', 'They disagree about whether the equipment passed inspection.', 'They report different construction budgets.', 'One describes winter conditions and the other describes spring.'],
        answer: 'They emphasize different criteria: safety and cost versus comfort during supervision.',
        accepted: ['They emphasize different criteria: safety and cost versus comfort during supervision.'],
        hint: 'Ask what each writer considers necessary for a successful playground.',
        explanation: 'Both accept the inspection result. The parks report emphasizes safety and budget, while the newsletter highlights a design need for supervising adults.'
      },
      {
        id: 'p4',
        prompt: 'Read both accounts of a rehearsal cancellation. Account A, a student: “No cancellation message was sent before I left home at four. I checked the club’s email list at 3:55.” Account B, the director: “I sent the cancellation at 3:30 through the school’s new messaging app. I did not send an email because I thought everyone had joined the app.” What best explains the apparent conflict?',
        options: ['The student and director disagree about whether rehearsal was canceled.', 'They refer to different communication channels, so sending through the app does not establish that an email was sent.', 'The student admits to reading the message before leaving home.', 'The director claims to have emailed every student at 3:30.'],
        answer: 'They refer to different communication channels, so sending through the app does not establish that an email was sent.',
        accepted: ['They refer to different communication channels, so sending through the app does not establish that an email was sent.'],
        hint: 'What exactly did the student check, and where did the director post?',
        explanation: 'The student’s broad statement rests on checking email; the director used an app. The accounts explain a communication gap but do not establish what the student received in the app.'
      },
      {
        id: 'p5',
        prompt: 'Read both accounts of a town meeting. Account A, a reporter seated by the stage: “When the chair asked for objections, I heard none, and the proposal passed.” Account B, a resident at the rear: “I called out an objection, but the microphone near my seat was off. The chair continued without responding.” Which conclusion is best supported by the two accounts alone?',
        options: ['The resident certainly remained silent.', 'The chair deliberately ignored every objection.', 'The reporter may not have heard the resident; the accounts alone do not establish what the chair heard.', 'The proposal failed because an objection automatically defeats it.'],
        answer: 'The reporter may not have heard the resident; the accounts alone do not establish what the chair heard.',
        accepted: ['The reporter may not have heard the resident; the accounts alone do not establish what the chair heard.'],
        hint: 'Distinguish what someone heard from what everyone in the room said.',
        explanation: 'A statement about hearing no objection does not prove none was spoken, especially with an inactive microphone. Neither account establishes the chair’s knowledge or intent.'
      },
      {
        id: 'p6',
        prompt: 'Read both accounts of a store’s donation. Account A, the store’s announcement: “We donated every unsold loaf from Saturday to the shelter. Nothing remained for disposal.” Account B, the shelter coordinator: “We received twenty loaves from the store. The driver said another ten unsold loaves were discarded because their packaging was damaged.” Which pair of claims directly conflicts?',
        options: ['The store donated bread, and the shelter received bread.', 'The delivery happened after bread remained unsold, and a driver made the trip.', 'The shelter received twenty loaves, and the store had unsold bread.', 'No unsold loaves were discarded, and ten unsold loaves were discarded.'],
        answer: 'No unsold loaves were discarded, and ten unsold loaves were discarded.',
        accepted: ['No unsold loaves were discarded, and ten unsold loaves were discarded.'],
        hint: 'A direct conflict involves claims that cannot both be true about the same loaves.',
        explanation: 'The store’s claim that nothing was discarded is incompatible with the report that ten loaves were discarded. The accounts agree that a donation occurred, but more evidence is needed to decide which disposal claim is accurate.'
      }
    ],
    notebook: {
      prompt: 'Read both accounts. Account A, a student organizer: “The clothing swap reduced waste. We recorded eighty items leaving with new owners, so the event accomplished its purpose.” Account B, a facilities worker: “Eighty items were taken, but five bags of unwanted clothing remained. Until those bags are reused or recycled, we cannot tell how much disposal the event prevented.” Write a paragraph naming one shared fact, explaining the difference in interpretation, and proposing specific evidence that would help evaluate the event. Do not assume either speaker is dishonest. Self-check your written response.',
      checklist: ['I distinguish a shared count from different interpretations of success.', 'I fairly explain what each account measures or leaves uncertain.', 'I propose evidence that directly addresses reuse or disposal rather than unrelated popularity.'],
      sample: 'Both accounts report that eighty items went to new owners. The organizer treats that reuse as evidence that the swap met its goal, while the facilities worker emphasizes uncertainty about the items left behind and the amount of disposal prevented. The accounts do not disagree about the eighty items; they differ in how completely the event’s effect has been measured. Records showing what happened to the five remaining bags, along with information about what owners would otherwise have done with donated clothes, would help evaluate the waste-reduction claim.'
    }
  },
  {
    id: 'ela-argument-evidence', grade: 8, subject: 'ELA',
    title: 'Evaluate evidence for an argument',
    objective: 'Judge whether evidence is relevant, credible, and sufficient for the specific claim it is used to support.',
    learn: [
      'An argument gives a claim and reasons for accepting it. Evidence supports those reasons with observations, examples, records, research, or other information. Before judging evidence, state the exact claim. Evidence that a program is popular does not necessarily show that it improves learning, and evidence that a plan works does not necessarily show that it is affordable.',
      'Test relevance by asking whether the evidence addresses the claim’s actual subject and outcome. Test credibility by checking how the information was obtained and whether the source has access or expertise relevant to that question. A named expert in plant science may explain growing conditions, but that expertise alone does not establish the cost of a school bus route.',
      'Test sufficiency by asking whether there is enough evidence for the claim’s size. A single person’s experience can illustrate a possibility but rarely establishes what happens to everyone. A voluntary survey may overrepresent people with strong opinions. Larger numbers help only when the method fits the question and the group studied reasonably matches the group in the claim.',
      'Watch for a jump from association to cause. If attendance improves after a new club begins, the club might help, but a simultaneous schedule change could also matter. Stronger studies compare similar conditions and consider alternative explanations. You do not have to reject all imperfect evidence: describe what it supports, what it leaves uncertain, and what additional evidence would help.'
    ],
    examples: [
      {
        prompt: 'Read this proposed argument: “Our school should add a second water-bottle filling station because students lose class time waiting at the only one. For five school days, office volunteers timed the line after lunch. The median wait was six minutes, and teachers recorded students arriving late from that line. A price quote lists the installation cost, but no location has been selected.” Which evidence supports the lost-class-time reason most directly?',
        steps: ['Separate the argument’s need claim from its cost and location questions.', 'Identify observations that measure the claimed problem: waits and related late arrivals.', 'Recognize a limit: the observations support a problem with the current line, not a guarantee about every possible installation.'],
        answer: 'The timed waits and teachers’ records of late arrivals directly support the claim that the existing line costs class time. The price quote addresses affordability instead.'
      },
      {
        prompt: 'Read this proposed argument: “Every student studies better with music. I played music while doing homework last night and finished early. Three friends say they also like studying with music. Therefore, teachers should play music during every independent assignment.” Evaluate the evidence for the claim about every student.',
        steps: ['Notice the very broad words every student and every assignment.', 'Compare that scope with the narrow evidence: one homework session and three friends’ preferences.', 'Distinguish liking music from measurable learning or concentration, and note that students and tasks may differ.'],
        answer: 'The evidence is insufficient. A few preferences and one experience do not show that music improves studying for every student or every task. A comparison of learning under different conditions would address the claim more directly.'
      }
    ],
    guided: {
      id: 'g1',
      prompt: 'Read: A student argues that adding shade sails would make the courtyard more usable on hot days. The proposal includes temperature readings from shaded and unshaded benches taken at the same times over two warm weeks. It also includes a list of popular paint colors and photographs of attractive courtyards. The student still needs installation estimates. Which evidence most directly supports the claim about use during heat?',
      options: ['The matched temperature readings from shaded and unshaded benches.', 'The list of students’ favorite paint colors.', 'The photographs showing attractive courtyard designs.', 'The number of pages in the proposal.'],
      answer: 'The matched temperature readings from shaded and unshaded benches.',
      accepted: ['The matched temperature readings from shaded and unshaded benches.'],
      hint: 'Connect the evidence to the heat-related reason rather than to appearance.',
      explanation: 'Comparisons of shaded and unshaded temperatures address the heat problem most directly. They do not settle cost or guarantee increased use, but they are more relevant than colors or attractive photographs.',
      steps: ['Restate the specific problem the proposed shade is meant to address.', 'Identify which evidence measures a condition related to that problem.', 'Separate support for that reason from other questions, such as appearance and cost.']
    },
    practice: [
      {
        id: 'p1',
        prompt: 'Read: The chess club wants the cafeteria to serve soup daily. Its petition says, “All students prefer soup to sandwiches. Eighteen of the twenty chess club members chose soup in our survey.” The club met on a rainy afternoon, and members selected between two pictured meals. The petition includes no responses from students outside the club. What is the strongest concern about the evidence?',
        options: ['The survey asks about preferences rather than counting actual cafeteria purchases.', 'One club’s responses do not establish what all students prefer.', 'The survey does not ask members to explain the reasons for their choices.', 'The survey describes the pictured meals without comparing their prices.'],
        answer: 'One club’s responses do not establish what all students prefer.',
        accepted: ['One club’s responses do not establish what all students prefer.'],
        hint: 'Compare the group surveyed with the group named in the claim.',
        explanation: 'The evidence describes a small, specific group, while the claim covers all students. A broader, more representative survey would better address schoolwide preferences.'
      },
      {
        id: 'p2',
        prompt: 'Read: A flyer claims that a new planner app caused students’ missing assignments to decrease. It compares September with October, when the app began. However, teachers also started sending weekly reminders in October, and the school opened a homework room. The flyer provides no comparison with students who did not use the app. Which evaluation is most reasonable?',
        options: ['The reminders rule out the app as a possible contributor to the decrease.', 'The decrease can reasonably be divided equally among the three new supports.', 'The evidence shows a change but does not isolate the app from other possible causes.', 'The timing is sufficient to identify the app as the main cause of the decrease.'],
        answer: 'The evidence shows a change but does not isolate the app from other possible causes.',
        accepted: ['The evidence shows a change but does not isolate the app from other possible causes.'],
        hint: 'What else changed at the same time as the app?',
        explanation: 'The reminders and homework room are alternative explanations. The app may have contributed, but the comparison does not identify its separate effect.'
      },
      {
        id: 'p3',
        prompt: 'Read: A neighborhood committee argues that repairing a footbridge is affordable within its maintenance fund. Members have photographs of rotten boards, testimonials from walkers, a map of the route, and an unsigned guess about lumber prices. The town requires repairs to meet current safety rules. Which additional evidence would best support the specific claim about affordability?',
        options: ['A count of how many residents use the bridge each day.', 'A comparison of the bridge’s age with the ages of nearby bridges.', 'A survey asking residents how urgently they want the bridge repaired.', 'An itemized repair estimate meeting safety requirements compared with the available fund balance.'],
        answer: 'An itemized repair estimate meeting safety requirements compared with the available fund balance.',
        accepted: ['An itemized repair estimate meeting safety requirements compared with the available fund balance.'],
        hint: 'Affordability requires a comparison between what the work will cost and what money is available.',
        explanation: 'A qualified cost estimate and fund balance directly test whether the required repair can be paid for. Popularity and damage photos address value or need, not affordability.'
      },
      {
        id: 'p4',
        prompt: 'Read: A school is choosing native plants for a garden that receives little afternoon sunlight. A catalog salesperson calls one plant “perfect everywhere.” A regional botanist provides field records showing how local species grow under different light levels. A famous athlete recommends a colorful flower, and a student shares a photo without knowing where it was taken. Which source is most credible for the light-condition question?',
        options: ['The regional botanist’s records of local species under different light levels.', 'The salesperson’s unsupported promise that one plant is perfect everywhere.', 'The athlete’s recommendation based on the flower’s color.', 'The unidentified location in the student’s photograph.'],
        answer: 'The regional botanist’s records of local species under different light levels.',
        accepted: ['The regional botanist’s records of local species under different light levels.'],
        hint: 'Look for relevant expertise combined with evidence, not merely a confident or famous speaker.',
        explanation: 'The botanist offers both relevant expertise and observations matching the garden’s light question. The source is strongest because of that fit, not simply because of a title.'
      },
      {
        id: 'p5',
        prompt: 'Read: A debate team claims that its peer-tutoring pilot was useful to the participants. Sixteen students attended regularly. Their quiz scores rose during the pilot, and most said the explanations helped. The team also acknowledges that participants volunteered, there was no comparison group, and the quizzes covered different units. Which conclusion stays within the evidence?',
        options: ['The score increase establishes that the tutoring caused participants to learn more.', 'The results are encouraging for these participants, but they do not establish that tutoring caused the score increase.', 'The lack of a comparison group means the positive observations have no informational value.', 'Participants’ favorable comments are enough to recommend the same program for all students.'],
        answer: 'The results are encouraging for these participants, but they do not establish that tutoring caused the score increase.',
        accepted: ['The results are encouraging for these participants, but they do not establish that tutoring caused the score increase.'],
        hint: 'A limited conclusion can recognize a positive pattern without claiming proof of cause.',
        explanation: 'The scores and comments provide encouraging observations, but volunteering, changing quiz content, and no comparison group limit the causal conclusion.'
      },
      {
        id: 'p6',
        prompt: 'Read: A student proposes moving a bicycle rack closer to the main entrance because the current rack leaves bicycles exposed to rain. The argument cites a month of photographs showing uncovered bicycles during storms. A reviewer replies that the entrance area is too narrow for emergency access. Which evidence would best address that counterargument while preserving the proposal’s purpose?',
        options: ['A survey asking bicycle riders whether they would prefer a sheltered rack.', 'Repair receipts documenting rain damage to bicycles parked at the current rack.', 'A measured layout checked against access requirements, showing whether a sheltered rack can fit without blocking the entrance.', 'A count of how many bicycles students park on rainy days.'],
        answer: 'A measured layout checked against access requirements, showing whether a sheltered rack can fit without blocking the entrance.',
        accepted: ['A measured layout checked against access requirements, showing whether a sheltered rack can fit without blocking the entrance.'],
        hint: 'The reviewer challenges safe placement, not whether rain exists.',
        explanation: 'A measured, requirement-based layout tests the access concern directly. Repeating evidence about rain would not answer the counterargument about space.'
      }
    ],
    notebook: {
      prompt: 'Read: A class proposes replacing printed event flyers with digital notices. Its argument says the change will reduce paper use without making announcements harder to access. The class counted two hundred unused flyers after one event. It also surveyed students during a technology club meeting, where nearly everyone reported checking school messages daily. No families or students outside the club were surveyed. Write a paragraph evaluating the evidence for both parts of the claim. Propose one concrete improvement to the evidence. Self-check; your writing is not automatically scored.',
      checklist: ['I evaluate paper use and access separately rather than treating them as the same claim.', 'I explain both a useful piece of evidence and a limitation of its method or scope.', 'I propose additional evidence that directly addresses the remaining uncertainty.'],
      sample: 'The unused flyers suggest that the school could avoid some printing, although one event does not establish typical waste across the year. The technology club survey is weaker evidence that digital notices would preserve access for everyone. Club members may check messages more often than other students, and families were not represented. A schoolwide access survey offered in both paper and digital forms would better identify people who cannot reliably receive digital notices. The school could also count unused flyers at several different events before estimating paper savings.'
    }
  },
  {
    id: 'ela-word-choice-tone', grade: 8, subject: 'ELA',
    title: 'Explain how word choice shapes tone',
    objective: 'Use specific words and their connotations to explain a speaker’s attitude and the effect of a wording change.',
    learn: [
      'Tone is the attitude a speaker or writer expresses toward a subject or audience. A speaker may sound admiring, uneasy, playful, frustrated, or matter-of-fact. Mood is the feeling a passage creates for a reader. A description can make readers feel tense because its speaker sounds fearful, but tone and mood are not identical labels.',
      'Words have dictionary meanings and associations called connotations. “The crowd gathered” reports an action neutrally; “the crowd swarmed” may suggest restless movement or a threatening loss of control. Words with similar basic meanings can therefore frame the same event differently. Always examine the surrounding passage, since a word can carry different effects in different contexts.',
      'To explain an effect, identify the exact word or phrase, describe its association, and connect that association to an attitude. “The word trudged suggests effort and weariness, making the speaker sound discouraged” is stronger than “trudged makes the passage descriptive.” Clusters of words often provide more reliable evidence of tone than one isolated word.',
      'A revision can change tone even when the basic facts remain. Replacing “a reckless scheme” with “an untested proposal” reduces condemnation without claiming the plan has been tested. When comparing revisions, preserve the factual content and ask what judgment becomes stronger or weaker. Avoid assigning a tone just because the subject is happy or sad; the speaker’s actual language matters.'
    ],
    examples: [
      {
        prompt: 'Read: “The train finally crept into the station. I hauled my bag past another flickering sign and sank onto a bench. Even the clock seemed too tired to move.” How do the verbs help establish tone?',
        steps: ['Locate the action words: crept, hauled, and sank.', 'Notice that these verbs suggest slow movement, effort, and depleted energy rather than excitement.', 'Connect the pattern to the speaker’s attitude toward the journey instead of merely labeling the station.'],
        answer: 'The verbs create a weary, discouraged tone. They make even ordinary movements feel slow and burdensome, matching the speaker’s exhaustion.'
      },
      {
        prompt: 'Read: “Our tiny garden offered its first tomato today. I held the bright little treasure in both hands while my sister searched for a plate worthy of the occasion.” What does calling the tomato a “treasure” contribute?',
        steps: ['Start with the literal object: it is a tomato from a small garden.', 'Compare that object with the value suggested by treasure.', 'Use the careful handling and special plate to confirm that the word expresses affectionate pride rather than financial value.'],
        answer: '“Treasure” makes the tomato seem precious to the speaker, creating an affectionate, celebratory tone about a small achievement.'
      }
    ],
    guided: {
      id: 'g1',
      prompt: 'Read: “The committee unveiled its so-called improvement: three shiny signs pointing toward the same locked door. Apparently, finding the entrance was our only problem.” Which tone is most strongly conveyed by “so-called” and “Apparently” in this context?',
      options: ['Grateful for a practical solution.', 'Uncertain about where the door is located.', 'Delighted by the committee’s artistic skill.', 'Sarcastically critical of a solution that misses the real problem.'],
      answer: 'Sarcastically critical of a solution that misses the real problem.',
      accepted: ['Sarcastically critical of a solution that misses the real problem.'],
      hint: 'Compare the label “improvement” with the fact that the door remains locked.',
      explanation: '“So-called” questions whether the change deserves its name, and “Apparently” introduces a pointed remark about the committee’s mistaken focus. Together they signal sarcastic criticism.',
      steps: ['Identify what problem the new signs do and do not address.', 'Ask whether “so-called” accepts the word “improvement” at face value.', 'Choose the attitude supported by both the wording and the unresolved locked door.']
    },
    practice: [
      {
        id: 'p1',
        prompt: 'Read: “Beyond the last house, the path slipped beneath the trees. A branch scraped my sleeve. Somewhere ahead, a gate clicked shut, though I could see no one near it.” Which group of words contributes most to an uneasy tone?',
        options: ['“scraped,” “clicked shut,” and “could see no one.”', '“house,” “path,” and “trees,” which identify the setting.', '“Beyond,” “beneath,” and “ahead,” which establish spatial relationships.', '“my sleeve,” which brings attention to the narrator’s clothing.'],
        answer: '“scraped,” “clicked shut,” and “could see no one.”',
        accepted: ['“scraped,” “clicked shut,” and “could see no one.”'],
        hint: 'Look for words that suggest discomfort or an unexplained event.',
        explanation: 'The scrape, sudden closing sound, and unseen source create a pattern of discomfort and uncertainty. The other groups mainly identify objects or locations without conveying that uneasy attitude.'
      },
      {
        id: 'p2',
        prompt: 'Read: “The mayor’s bold plan would replace the vacant lot with a public garden. At Tuesday’s meeting, residents asked how the project would be funded.” If “bold plan” becomes “reckless scheme,” how does the tone change while the proposal itself stays the same?',
        options: ['It becomes more neutral by naming the proposal without a judgment.', 'It becomes more disapproving, suggesting poor judgment rather than daring initiative.', 'It remains equally approving because both phrases suggest willingness to take a risk.', 'It becomes more uncertain, suggesting the speaker has no opinion about the proposal.'],
        answer: 'It becomes more disapproving, suggesting poor judgment rather than daring initiative.',
        accepted: ['It becomes more disapproving, suggesting poor judgment rather than daring initiative.'],
        hint: 'Compare the judgment carried by “bold” with the judgment carried by “reckless.”',
        explanation: '“Bold” can frame the plan as daring or ambitious, while “reckless scheme” suggests irresponsible planning. The revision increases criticism without changing the proposed garden.'
      },
      {
        id: 'p3',
        prompt: 'Read: “The repair crew arrived at 9:10. Workers closed the north lane, removed two damaged panels, and reopened the road at 11:45. Inspectors will check the new panels next week.” Which word choice best characterizes the report’s tone?',
        options: ['Bitter, because it blames workers for the damage.', 'Amazed, because it praises an extraordinary achievement.', 'Matter-of-fact, because precise times and plain action verbs report events without judgment.', 'Playful, because the lane closure is described as a joke.'],
        answer: 'Matter-of-fact, because precise times and plain action verbs report events without judgment.',
        accepted: ['Matter-of-fact, because precise times and plain action verbs report events without judgment.'],
        hint: 'Check whether the language praises, blames, jokes, or simply records.',
        explanation: 'The report uses specific times and neutral verbs such as “closed,” “removed,” and “reopened.” It does not supply emotional judgments about the crew or its work.'
      },
      {
        id: 'p4',
        prompt: 'Read: “Grandma’s kitchen was gloriously crowded: jars leaned against cookbooks, spoons waited in chipped mugs, and a floury apron claimed the best chair. I would not have traded that cheerful jumble for a spotless showroom.” What attitude does “cheerful jumble” express?',
        options: ['Alarm that the kitchen presents an immediate danger.', 'Disgust toward the grandmother’s belongings.', 'Indifference to the room’s appearance or memories.', 'Affection for the kitchen’s lively, imperfect character.'],
        answer: 'Affection for the kitchen’s lively, imperfect character.',
        accepted: ['Affection for the kitchen’s lively, imperfect character.'],
        hint: 'Read “jumble” together with “cheerful” and the refusal to trade the room.',
        explanation: '“Jumble” acknowledges disorder, but “cheerful” and the comparison with a showroom frame it warmly. The speaker values the kitchen rather than condemning its imperfections.'
      },
      {
        id: 'p5',
        prompt: 'Read: “The team trudged into the gym after the long trip. Bags sagged from their shoulders, and their replies barely rose above whispers.” A revision changes “trudged” to “strode,” “sagged” to “swung,” and “whispers” to “confident greetings.” What effect does the set of revisions create?',
        options: ['It shifts the description from exhaustion toward energy and confidence.', 'It preserves the exhausted tone while making the movements more specific.', 'It creates a more formal, detached tone by removing judgments about the team.', 'It shifts the description toward impatience and resentment about the journey.'],
        answer: 'It shifts the description from exhaustion toward energy and confidence.',
        accepted: ['It shifts the description from exhaustion toward energy and confidence.'],
        hint: 'Compare the pattern created by all three original choices with the pattern created by the replacements.',
        explanation: 'The original words suggest effort and low energy. The revised movement and greetings suggest assurance and liveliness, while the trip can still have been long.'
      },
      {
        id: 'p6',
        prompt: 'Read: “I have only managed to keep one fern alive, so naturally my brother has appointed me Supreme Commander of All Household Vegetation. My first official act was to ask which bottle held the plant food.” What does the exaggerated title contribute to the speaker’s tone?',
        options: ['It creates a resentful tone suggesting that the speaker rejects a burdensome assignment.', 'It creates a playful, self-mocking tone by contrasting a grand title with limited experience.', 'It creates a solemn tone emphasizing the serious duties of caring for one fern.', 'It creates a boastful tone suggesting that the speaker sees themself as an expert.'],
        answer: 'It creates a playful, self-mocking tone by contrasting a grand title with limited experience.',
        accepted: ['It creates a playful, self-mocking tone by contrasting a grand title with limited experience.'],
        hint: 'Compare the size of the title with the small achievement and basic question.',
        explanation: 'The grand title humorously exceeds the speaker’s experience. The question about plant food reinforces gentle self-mockery rather than genuine authority or anger.'
      }
    ],
    notebook: {
      prompt: 'Read: “The old theater waited at the end of the block, its faded stars still glimmering above the door. Inside, the velvet seats held the hush of a thousand remembered evenings. I brushed dust from one armrest and imagined the curtain rising again.” Write a paragraph identifying the speaker’s tone and explaining two word choices that create it. Then revise one sentence to sound dismissive instead, and explain which words changed the attitude. Use the checklist to assess your own response.',
      checklist: ['I name a defensible attitude and support it with two exact words or phrases.', 'I explain associations and effects rather than simply listing adjectives.', 'My revision changes the attitude through word choice, and I explain the contrast.'],
      sample: 'The speaker sounds fond and reflective toward the theater. “Still glimmering” suggests that some beauty remains despite age, and “remembered evenings” connects the quiet room with valued experiences rather than emptiness alone. A dismissive revision could be: “The shabby theater squatted at the end of the block, its tacky stars peeling above the door.” “Shabby,” “squatted,” and “tacky” replace lingering beauty with neglect and scorn. The building is still old, but the speaker’s judgment of it has changed.'
    }
  },
  {
    id: 'ela-active-passive-voice', grade: 8, subject: 'ELA',
    title: 'Choose active or passive voice deliberately',
    objective: 'Identify who performs or receives an action and revise voice without changing tense or essential meaning.',
    learn: [
      'In active voice, the grammatical subject performs the action: “The volunteers repaired the fence.” Volunteers is the subject and the doer. In passive voice, the subject receives the action: “The fence was repaired by the volunteers.” Fence becomes the subject, but the volunteers still do the repairing. Voice describes this relationship, not whether an action is energetic or quiet.',
      'A common passive pattern is a form of be plus a past participle: is repaired, was repaired, or will be repaired. The doer may appear in a by phrase or may be left out. Do not label every sentence containing be as passive. “The volunteers are repairing the fence” is active progressive: the subject is doing the work. “The fence is tall” describes a condition rather than a passive action.',
      'To change passive to active, find the receiver, the action, and the doer. Make the doer the new subject, then keep the action’s tense: “The samples were tested by the technician” becomes “The technician tested the samples.” To change active to passive, make the receiver the subject and use the correct form of be with the past participle. Not every active sentence has an object that can become a passive subject.',
      'Neither voice is always correct or always better. Active voice often makes responsibility clearer. Passive voice can keep attention on a result or on a receiver when the doer is unknown or unimportant. However, it can also hide responsibility: “Mistakes were made” does not say who made them. Choose the voice that serves the purpose, and never invent an unknown doer merely to force an active revision.'
    ],
    examples: [
      {
        prompt: 'Sentence: “The final design was approved by the student committee.” Rewrite it in active voice without changing its past tense or meaning.',
        steps: ['Identify the receiver: the final design receives approval.', 'Find the doer in the by phrase: the student committee performs the approval.', 'Make that doer the subject and change “was approved” to the simple past “approved,” keeping the design as the object.'],
        answer: 'The student committee approved the final design.'
      },
      {
        prompt: 'Sentence: “Someone removed the trail marker during the night.” The report should emphasize the missing marker because the person is unknown. Revise in passive voice.',
        steps: ['Identify the known receiver of the action: the trail marker.', 'Make the marker the subject and preserve past time with “was removed.”', 'Leave out the vague doer instead of inventing a person, and retain the time information.'],
        answer: 'The trail marker was removed during the night.'
      }
    ],
    guided: {
      id: 'g1',
      prompt: 'Sentence: “The damaged cables were replaced by the electrician before noon.” Which revision uses active voice and preserves the original tense and meaning?',
      options: ['The electrician will replace the damaged cables before noon.', 'The damaged cables replaced the electrician before noon.', 'The electrician replaced the damaged cables before noon.', 'The damaged cables were being replaced before noon.'],
      answer: 'The electrician replaced the damaged cables before noon.',
      accepted: ['The electrician replaced the damaged cables before noon.'],
      hint: 'Place the doer first, but do not move the action from the past into the future.',
      explanation: 'The electrician is the doer, so it becomes the active subject. “Replaced” retains the simple past; the cables remain the receiver, and the deadline stays unchanged.',
      steps: ['Locate the action, the receiver, and the doer in the original sentence.', 'Decide which noun must become the subject of an active revision.', 'Check that the revised action and its time match the original before choosing.']
    },
    practice: [
      {
        id: 'p1',
        prompt: 'Which sentence uses passive voice? Read all four sentences and identify the one whose subject receives the action.',
        options: ['The students are measuring the hallway.', 'The hallway seems unusually narrow.', 'The custodian opened the side door.', 'The hallway was measured by the students.'],
        answer: 'The hallway was measured by the students.',
        accepted: ['The hallway was measured by the students.'],
        hint: 'An action performed on the subject is different from an action performed by it.',
        explanation: 'In “The hallway was measured,” the hallway receives the measuring action. “Are measuring” is active progressive because the students perform the action.'
      },
      {
        id: 'p2',
        prompt: 'Sentence: “The science team will publish the results on Friday.” Which passive revision keeps the future tense, the doer, and the publication date?',
        options: ['The results will be published by the science team on Friday.', 'The results were published by the science team on Friday.', 'The science team will be publishing the results on Friday.', 'The results will publish the science team on Friday.'],
        answer: 'The results will be published by the science team on Friday.',
        accepted: ['The results will be published by the science team on Friday.'],
        hint: 'The receiver should become the subject, followed by a future passive verb phrase.',
        explanation: '“The results” receives the action and becomes the passive subject. “Will be published” preserves the future, and the by phrase retains who will publish them.'
      },
      {
        id: 'p3',
        prompt: 'Read: A lab note focuses on what happened to a water sample; the identity of the assistant is unimportant. Which sentence uses passive voice appropriately for that purpose?',
        options: ['An assistant carefully tested the water sample for copper.', 'The water sample was tested for copper.', 'The water sample contains a trace of copper.', 'The assistant was testing the water sample for copper.'],
        answer: 'The water sample was tested for copper.',
        accepted: ['The water sample was tested for copper.'],
        hint: 'Choose a grammatical sentence that places the receiver in focus and leaves the unimportant doer unstated.',
        explanation: 'The passive sentence makes the sample the subject and reports the testing without naming an assistant. The active alternatives give the assistant the subject position, while the sentence about copper content reports a result rather than the testing action.'
      },
      {
        id: 'p4',
        prompt: 'Sentence: “The librarian is arranging the new books by genre.” Which analysis of the verb phrase is correct?',
        options: ['It is passive because every use of “is” creates passive voice.', 'It is passive because the new books perform the arranging.', 'It is active progressive because the subject, the librarian, is performing the action.', 'It is neither active nor passive because it includes more than one verb word.'],
        answer: 'It is active progressive because the subject, the librarian, is performing the action.',
        accepted: ['It is active progressive because the subject, the librarian, is performing the action.'],
        hint: 'Ask who does the arranging instead of deciding from the word “is” alone.',
        explanation: 'The librarian performs the action. “Is arranging” marks an ongoing action in active voice; the receiver, books, is the object rather than the subject.'
      },
      {
        id: 'p5',
        prompt: 'Read: “The emergency exit was blocked by the delivery crew.” A safety report needs to make responsibility clear. Which revision puts the responsible group in the subject position without changing the event?',
        options: ['The emergency exit was blocked.', 'The delivery crew was near the emergency exit.', 'The delivery crew will block the emergency exit.', 'The delivery crew blocked the emergency exit.'],
        answer: 'The delivery crew blocked the emergency exit.',
        accepted: ['The delivery crew blocked the emergency exit.'],
        hint: 'Keep both who acted and what that group did, in the same time frame.',
        explanation: 'The active revision foregrounds the crew’s responsibility and preserves the past action. Omitting the doer hides responsibility, and being nearby is not the same as blocking the exit.'
      },
      {
        id: 'p6',
        prompt: 'Read: “The storage room was unlocked overnight. Investigators have not identified who unlocked it.” Which evaluation of the passive wording in the first sentence is best?',
        options: ['It is reasonable because the room receives the action and the doer is unknown.', 'It must be changed to name the custodian, even without evidence.', 'It is active because the room performs the unlocking.', 'It cannot be passive unless the sentence includes a by phrase.'],
        answer: 'It is reasonable because the room receives the action and the doer is unknown.',
        accepted: ['It is reasonable because the room receives the action and the doer is unknown.'],
        hint: 'A passive sentence may omit the doer when the available information does not identify one.',
        explanation: 'The context establishes an unlocking action with an unidentified doer. Passive voice reports what happened to the room without inventing responsibility; a by phrase is not required.'
      }
    ],
    notebook: {
      prompt: 'Read these report sentences: “The art club painted the benches on Tuesday. Someone damaged one bench overnight. The groundskeeper repaired the damage on Wednesday.” Write two versions of a short report. In the first, use active voice to emphasize the known doers. In the second, use passive voice to keep the benches and damage in focus. Preserve the times and do not invent who caused the damage. Then explain one reason a writer might choose each version. Self-check the revisions rather than seeking an automatic writing score.',
      checklist: ['My active version makes the known doers subjects without inventing an unknown person.', 'My passive version uses receiver subjects and correctly formed passive verb phrases.', 'Both versions preserve the timeline, and I explain how their emphasis differs.'],
      sample: 'Active emphasis: “The art club painted the benches on Tuesday. Someone damaged one bench overnight. The groundskeeper repaired the damage on Wednesday.” Passive emphasis: “The benches were painted by the art club on Tuesday. One bench was damaged overnight. The damage was repaired by the groundskeeper on Wednesday.” The first version emphasizes who did the known work, so it suits a report assigning credit or responsibility. The second follows what happened to the benches, so it suits a condition report. Neither version identifies the unknown person who caused the damage.'
    }
  },
  {
    id: 'ela-recognizing-verbals', grade: 8, subject: 'ELA',
    title: 'Recognize gerunds, participles, and infinitives',
    objective: 'Classify a verbal by the job it performs in its sentence rather than by its ending alone.',
    learn: [
      'A verbal is a form derived from a verb that functions as another part of speech instead of serving as the sentence’s main verb. In “Swimming builds endurance,” swimming names an activity and works as a noun. In “The swimmers are practicing,” are practicing is the sentence’s verb phrase. To recognize a verbal, first locate the sentence’s subject and main verb, then ask what job the suspected form does.',
      'A gerund ends in -ing and functions as a noun. It can be a subject, as in “Drawing relaxes me,” or an object, as in “I enjoy drawing.” A whole gerund phrase can do that noun job: in “Packing the lunches took ten minutes,” packing the lunches is the subject. The words after the gerund help complete its meaning but do not change the phrase’s noun role.',
      'A participle functions as an adjective, describing a noun or pronoun. Present participles end in -ing, as in “the flickering lamp.” Past participles often end in -ed, but they can be irregular, as in “the broken latch.” Compare “Dancing requires balance” with “The dancing child smiled”: dancing names an activity in the first sentence but describes the child in the second. Its job, not just its spelling, determines its classification.',
      'An infinitive usually consists of to plus a verb’s base form, such as to listen. Infinitives can act as nouns, adjectives, or adverbs: “To listen takes effort,” “a place to listen,” and “We paused to listen.” Do not confuse an infinitive with a prepositional phrase such as “to the library,” where to is followed by a noun. For each form, check both its structure and its function in context.'
    ],
    examples: [
      {
        prompt: 'Sentence: “Sorting the donated books took the volunteers an hour.” What kind of verbal begins the sentence, and what job does its phrase perform?',
        steps: ['Locate the main verb: took tells what required an hour.', 'Ask what took an hour: the activity “Sorting the donated books.”', 'Because sorting ends in -ing and its whole phrase acts as the subject, classify it by its noun function.'],
        answer: '“Sorting” is a gerund. The gerund phrase “Sorting the donated books” functions as the subject of “took.”'
      },
      {
        prompt: 'Sentence: “We moved the chairs to create a clear aisle.” Identify the verbal phrase and explain its function.',
        steps: ['Find the main subject and verb: We moved.', 'Notice to followed by the base verb create, which forms an infinitive rather than a preposition plus noun.', 'Ask why the chairs were moved: “to create a clear aisle” gives the purpose, so it functions adverbially.'],
        answer: '“To create a clear aisle” is an infinitive phrase functioning as an adverb because it explains the purpose of moving the chairs.'
      }
    ],
    guided: {
      id: 'g1',
      prompt: 'Sentence: “The trembling puppy hid behind the basket.” What is the function of “trembling” in this sentence?',
      options: ['A gerund functioning as the subject of the sentence.', 'A participle functioning as an adjective that describes “puppy.”', 'A gerund functioning as the object of “hid.”', 'The sentence’s main verb expressing what the puppy did.'],
      answer: 'A participle functioning as an adjective that describes “puppy.”',
      accepted: ['A participle functioning as an adjective that describes “puppy.”'],
      hint: 'Find the main action first, then ask which noun the -ing word describes.',
      explanation: '“Hid” is the main verb, and “puppy” is the subject noun. “Trembling” describes that puppy, so it is a participle used as an adjective, not a gerund naming an activity.',
      steps: ['Identify the subject noun and the main verb of the sentence.', 'Ask whether “trembling” names a thing or activity, describes a noun, or supplies the main action.', 'Match that function to a verbal category instead of relying on the -ing ending alone.']
    },
    practice: [
      {
        id: 'p1',
        prompt: 'Sentence: “Hiking before sunrise requires careful planning.” How does the phrase “Hiking before sunrise” function?',
        options: ['As a participial phrase describing “planning.”', 'As an infinitive phrase explaining how sunrise happens.', 'As a gerund phrase functioning as the subject of “requires.”', 'As the main verb phrase in the future tense.'],
        answer: 'As a gerund phrase functioning as the subject of “requires.”',
        accepted: ['As a gerund phrase functioning as the subject of “requires.”'],
        hint: 'Ask what requires careful planning.',
        explanation: 'The hiking activity is what requires planning, so the whole phrase acts as a noun subject. The sentence’s main verb is “requires.”'
      },
      {
        id: 'p2',
        prompt: 'Sentence: “Priya enjoys sketching buildings during long train rides.” What is “sketching” as used here?',
        options: ['A participle describing “Priya.”', 'An infinitive because it names an action.', 'The main verb; “enjoys” is only a describing word.', 'A gerund whose phrase functions as the object of “enjoys.”'],
        answer: 'A gerund whose phrase functions as the object of “enjoys.”',
        accepted: ['A gerund whose phrase functions as the object of “enjoys.”'],
        hint: 'Ask what Priya enjoys; the answer names an activity.',
        explanation: '“Enjoys” is the main verb. Priya enjoys the activity of sketching buildings, so the -ing form begins a gerund phrase functioning as the verb’s object.'
      },
      {
        id: 'p3',
        prompt: 'Sentence: “The cracked bowl rested beside the sink.” Which analysis of “cracked” is correct?',
        options: ['It is a past participle used as an adjective describing “bowl.”', 'It is a gerund because all words related to actions are nouns.', 'It is an infinitive without “to” that explains a purpose.', 'It is the main verb telling where the bowl rested.'],
        answer: 'It is a past participle used as an adjective describing “bowl.”',
        accepted: ['It is a past participle used as an adjective describing “bowl.”'],
        hint: 'The bowl’s action is “rested.” What job does the other verb-derived word do?',
        explanation: '“Cracked” describes the bowl and comes from the past participle of crack. Its adjective function makes it a participle here, while “rested” is the main verb.'
      },
      {
        id: 'p4',
        prompt: 'Sentence: “The hikers paused to refill their bottles.” How does “to refill their bottles” function?',
        options: ['As a gerund phrase serving as the subject.', 'As an infinitive phrase explaining the purpose of pausing.', 'As a participial phrase describing “bottles.”', 'As a prepositional phrase naming the object of “paused.”'],
        answer: 'As an infinitive phrase explaining the purpose of pausing.',
        accepted: ['As an infinitive phrase explaining the purpose of pausing.'],
        hint: 'Look at the word following “to,” then ask why the hikers paused.',
        explanation: '“To” plus the base verb “refill” forms an infinitive. The phrase explains why the hikers paused, so it functions as an adverb of purpose.'
      },
      {
        id: 'p5',
        prompt: 'Sentence: “Mara walked to the workshop to repair her lamp.” Which phrase is an infinitive phrase?',
        options: ['“to the workshop,” because every phrase beginning with “to” is an infinitive.', '“Mara walked,” because it contains the sentence’s subject and verb.', '“to repair her lamp,” because “to” introduces the base verb “repair.”', '“her lamp,” because it names the object receiving the repair.'],
        answer: '“to repair her lamp,” because “to” introduces the base verb “repair.”',
        accepted: ['“to repair her lamp,” because “to” introduces the base verb “repair.”'],
        hint: 'Compare what comes after each occurrence of “to.”',
        explanation: '“To repair” combines to with a base verb and begins an infinitive phrase. “To the workshop” is a prepositional phrase naming a destination.'
      },
      {
        id: 'p6',
        prompt: 'Read: Sentence 1: “The students are rehearsing in the auditorium.” Sentence 2: “Rehearsing in the auditorium improves the students’ confidence.” Which comparison correctly explains “rehearsing”?',
        options: ['It is a gerund serving as the subject in both sentences.', 'It is a participle used as an adjective describing the auditorium in both sentences.', 'It is an infinitive in Sentence 1 and a gerund in Sentence 2.', 'It is part of the main verb phrase in Sentence 1 and begins a gerund phrase serving as the subject in Sentence 2.'],
        answer: 'It is part of the main verb phrase in Sentence 1 and begins a gerund phrase serving as the subject in Sentence 2.',
        accepted: ['It is part of the main verb phrase in Sentence 1 and begins a gerund phrase serving as the subject in Sentence 2.'],
        hint: 'Ask what the main verb is in each sentence and what serves as its subject.',
        explanation: 'In Sentence 1, “are rehearsing” is the finite progressive verb phrase performed by the students. In Sentence 2, “improves” is the main verb, and the rehearsing activity is its subject. The same -ing form has different functions.'
      }
    ],
    notebook: {
      prompt: 'Write three connected sentences about preparing for a performance, building a project, or learning a sport. Use a gerund phrase as a noun in one sentence, a participle describing a specific noun in another, and an infinitive phrase in the third. Copy each verbal or phrase below your paragraph, label it, and explain its job. Include enough context to distinguish an -ing verbal from a main verb phrase. Use your labels and the checklist for self-review; no keyword-based writing score is assigned.',
      checklist: ['My gerund phrase performs a noun job, and I name that job.', 'My participle clearly describes a stated noun rather than serving as the main verb.', 'My infinitive uses “to” plus a base verb, and I explain the phrase’s function.'],
      sample: 'Practicing the opening scene helped our group remember the timing. The excited performers gathered behind the curtain. We spoke quietly to protect our voices. “Practicing the opening scene” is a gerund phrase serving as the subject of “helped.” “Excited” is a past participle describing “performers”; “gathered” is that sentence’s main verb. “To protect our voices” is an infinitive phrase explaining why we spoke quietly, so it functions adverbially.'
    }
  }
];
