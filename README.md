# ![Jeopardy-CSV](/images/jeopardy-csv-logo-blu.png)

Fast and simple Jeopardy-style classroom game show. Made by [@domlet](https://domlet.github.io/) for classroom teachers. Just drag a CSV file onto the [game screen](indexhtml) to start play. Nothing fancy. Use a computer (not a phone) to host the game.

**Does not include:** Double Jeopardy, Daily Double, Final Jeopardy, or timing controls.

Scorekeeping is manual; to give `$300` to **Team 5**, the host must click the `+` button on **Team 5** three times.

Host can change **font size** with `⌘+` and `⌘-` (Mac) or `Control+` and `Control-` (most other keyboards).

Questions or comments? Use the [comments form here](https://domlet.github.io/).

## How It Works

### Simple mode

- [Use this slide]() to explain game play.
- Divide your group into 7 (or fewer) teams.
- [Load the game](https://domlet.github.io/jeopardy-csv) and drag a [CSV file](sample.csv) onto it.
- Click `-` or `+` to add or remove teams.
- **Optional:** Update team names (`Team 1`, `Team 2`, `Team 3`...)
- Play the game! (15-45 min)

### Enhanced mode (buzzer system)

You can use another device (such as a tablet or smart phone) to operate a buzzer system. This can help reduce facilitator bias. However, buzzer enthusiasm can lead to hardware damage, so I recommend using students' mobile phones as buzzers (not laptops or Chromebooks).

- **Optional:** Create a [Buzzonk](https://buzzonk.com/) room to track who buzzes in first.
- **Optional:** Each team should customize their name on Buzzonk.
- **Optional:** Update team names on game screen (`Team 1`, `Team 2`, `Team 3`...)
- **Optional:** Play the game!

If you are very extra, you might find a use for [Jeopardy Soundboard](https://www.myinstants.com/en/search/?name=jeopardy) from Myinstants. 🙀

## Key Controls (for Host)

**Optional.** During game play, you can press these keys to trigger actions and sound effects:

| Key                | What it does     | Sound                                                                                                                            |
| ------------------ | ---------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `Space` / `Return` | Show answer.     | <iframe frameborder="0" scrolling="no" src="https://freesound.org/embed/sound/iframe/264499/simple/small/" height="30"></iframe> |
| `Escape`           | Close window.    | <iframe frameborder="0" scrolling="no" src="https://freesound.org/embed/sound/iframe/273833/simple/small/" height="30"></iframe> |
| `5`                | Time limit beep. | [`timeout.mp3`](sounds/timeout.mp3)                                                                                              |

## How to Create a New Game?

1. Create a **CSV file** with 4 headings: `Category`, `Value`, `Clue` and `Answer` (see table below).
1. Want a template?
   1. [Download this CSV file](samples/jeopardy-template.csv), or
   1. [Copy this Google Sheet](https://docs.google.com/spreadsheets/d/1j9DGfF-acmh0VqTxSSx45rUhMezAvhnixP8vkoHiIzg/edit?gid=0#gid=0).
1. Want to see a completed example? Look at [`sample.csv`](sample.csv)
1. **Tip:** Don't leave [empty rows](samples/sample_empty_rows_input.png) in your spreadsheet. [Annoying result](samples/sample_empty_rows_output.png).

| Category      | Value | Clue                                                               | Answer     |
| ------------- | ----- | ------------------------------------------------------------------ | ---------- |
| Smoking Facts | 100   | Most commonly used drug in the U.S.                                | Nicotine   |
| Smoking Facts | 200   | Each cigarette a person smokes shortens their life by this amount. | 11 minutes |
| Smoking Facts | 300   | This percentage of U.S. adults use tobacco.                        | 30%        |

### How Many Questions?

You don't have to use a 5x5 board, as shown in the sample game. See below, some examples of 1x4 and 4x1 boards:

| CSV file                                   | Input                                | Output                                |
| ------------------------------------------ | ------------------------------------ | ------------------------------------- |
| [`sample_4x4.csv`](samples/sample_4x4.csv) | ![alt](samples/sample_4x4_input.png) | ![alt](samples/sample_4x4_output.png) |
| [`sample_4x1.csv`](samples/sample_4x1.csv) | ![alt](samples/sample_4x1_input.png) | ![alt](samples/sample_4x1_output.png) |
| [`sample_1x4.csv`](samples/sample_1x4.csv) | ![alt](samples/sample_1x4_input.png) | ![alt](samples/sample_1x4_output.png) |

## Contributing

Anyone can fork and customize the game. Please make a ✨[PR](https://en.wikipedia.org/wiki/Distributed_version_control#Pull_requests)✨ if you add something ingenious. Help me test with [BrowserStack](https://www.browserstack.com/).

## Licensed

<a href="https://github.com/domlet/jeopardy-csv">Jeopardy-CSV</a> © 2025 by <a href="https://domlet.github.io/about">Dom Brassey (@domlet)</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a> <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">
