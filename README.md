# MoleculeMassAmountCalc

Calculate Weight Pseudocode

  String InputMolecule
  int sum
  int psum
  String atom
  int atomCoef
  Until and index value of InputMolecule does not parse to Integer
    String coeffString += InputMolecule at index
    int coeff = coeffstring as Integer
    InputMolecule splice to get rid of parsed data
  If first index is not an Integer
    int coeff = 1

  If next index is string/char and capital letter
    atom += InputMolecule at index
    if next string/char and capital letter
      atom += InputMolecule at index
    else if index parses to Integer
      atomCoeff += index
      if index+1
