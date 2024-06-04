<script>
    import Page from "../components/Page.svelte";
</script>

<Page>
    <h1>JAPANESE</h1>
    <div class='certification'>
        <img src='https://omph.s-ul.eu/tAFnz7ig' alt='my N1 certificate'>
        <p>
            In December 2023, I passed the Japanese Language Proficiency Test (JLPT) N1 after less than three years of studying completely on my own.
        </p>
        <p>
            You can download my J-E translation of a short story from the Oregairu anthologies here:
            <a href='/manuscript.pdf' download='manuscript'>斯くして、彼の前に新たな敵は現れる。</a>
        </p>
    </div>
</Page>

<style>
    .certification {
        margin: 24px;
        display: flex;
        flex-direction: row;
    }

    .certification > img {
        height: 400px;
    }
</style>