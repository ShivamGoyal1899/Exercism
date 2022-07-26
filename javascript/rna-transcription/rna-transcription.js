//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (DNA) =>
  [...DNA].reduce((output, letter) => output += { 'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U' }[letter], '')
