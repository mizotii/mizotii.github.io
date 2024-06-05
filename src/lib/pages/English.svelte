<script>
    import Page from "../components/Page.svelte";
</script>

<Page>
    <h1>ENGLISH</h1>
    <p>I've written many papers on topics I never thought I'd touch. Below are my personal favorites:</p>
    <div class='papers'>
        <div class='paper'>
            <p>
                <a href="/310.pdf" download>ENGL 310</a>
            </p>
            For English 310, The Bible as Literature, I explained what inserting the cliché Adam and Eve story into the VOCALOID classic, Ringo Uri no Utakata Shoujo (The Transient Apple Salesgirl), does to the MV:
        </div>
        <div class='paper'>
            <p>
                <a href="/330.pdf" download>ENGL 330</a>
            </p>
            For English 330, The Romantic Age, I wrote about the 'wisdom' gained by the 'sadder and wiser man' in Coleridge's Rime of the Ancient Mariner:
        </div>
        <div class='paper'>
            <p>
                <a href="/308.pdf" download>ENGL 308</a>
            </p>
            For English 308, Marxism, I gave a review of Louis Althusser's fundamental concept of State Apparatus by comparing it to my experiences in rhythm game level design in a short response:
        </div>
    </div>
</Page>

<style>
    .papers {
        display: flex;
    }

    .paper {
        flex: 1;
        margin-left: 6px;
        margin-right: 6px;
        text-align: center;
    }
</style>