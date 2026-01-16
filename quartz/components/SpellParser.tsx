const SpellParser: QuartzComponent = ({fileData}: QuartzComponentProps) => {
  const showSpellData: boolean =
    !typeof fileData.frontmatter?.isSpell !== "undefined" &&
    !(!fileData.frontmatter?.isSpell || fileData.frontmatter?.isSpell === "false")
  if (!showSpellData) {
    return <></>
  }

  return <p>
    <i>{fileData.frontmatter?.spellSkillCheck} {fileData.frontmatter?.spellType}</i>
    <br></br>
    <b>Cost:</b><span> {fileData.frontmatter?.spellCost}</span>
    <br></br>
    <b>Penalty:</b><span> {fileData.frontmatter?.spellPenalty}</span>
    <br></br>
    <b>Range:</b><span> {fileData.frontmatter?.spellRange}</span>
  </p>
}

export default (() => SpellParser) satisfies QuartzComponentConstructor
