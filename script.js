  function Molecule(molecule, amountSub) {
    this.molecule = molecule;
    this.mass = findMass(molecule);
    this.coeff = findCoeff(molecule);
    this.amountSub = amountSub;
    this.amountWei = amountSub*this.mass;

  }

  function Molecule(molecule, amountWei) {
    this.molecule = molecule;
    this.mass = findMass(molecule);
    this.coeff = findCoeff(molecule);
    this.amountSub = amountWei/this.mass;
    this.amountWei = amountWei;

  }

  function Molecule(molecule) {
    this.molecule = molecule;
    this.mass = findMass(molecule);
    this.coeff = findCoeff(molecule);
    this.amountSub;
    this.amountWei;

  }


  function findCoeff(molecule) {
    var coeff = 0;
    coeff = parseInt(molecule, 10);

    if(coeff < 1 || isNaN(coeff)) {
      var coeff = 1;
    }

    return coeff;
  }

  function findMass(molecule) {
    var coeff = 0;
    coeff = parseInt(molecule, 10);
    var mass = 0;

      // If there is no leading coefficient, set index of slice to 0
    if(isNaN(coeff)) {
      var index = 0;
    }
    else {
      // Set index to be equal to char length og the coefficient
      var index = coeff.toString().length;
    }

    // Remove leading coefficient from molecule string
    molecule = molecule.slice(index);

    if(coeff < 1 || isNaN(coeff)) {
      var coeff = 1;
    }

    while(molecule != "") {

      if(typeof molecule.charAt(1) !== String || molecule.charAt(1) == molecule.chartAt(1).toUppercase()) {
        var tAtom = molecule[0];
        molecule = molecule.slice(1);
      }
      else {
        var tAtom = molecule.slice(0,2);
        molecule = molecule.slice(2);
      }
      var tCoeff = parseInt(molecule, 10);

      // Remove used coefficient from molecule
      if(isNaN(tCoeff)) {
        var index = 0;
      }
      else {
        // Set index to be equal to char length og the coefficient
        var index = tCoeff.toString().length;
      }

      // Remove leading coefficient from molecule string
      molecule = molecule.slice(index);


      // Ensure that we never multiply by 0
      if(tCoeff < 1 || isNaN(tCoeff)) {
        var tCoeff = 1;
      }

      tMass = findAtom(tAtom);
      if(tMass == false) {
        return false;
      }

      mass += tMass*tCoeff;

    }

    // Mass without coefficient
    return mass;
  }


    // Atomic mass taken from PTable.com, by Michael Dayah
  function findAtom(atom) {
    switch (atom) {
    	case 'H':
    		return 1.008;
    		break;
    	case 'He':
    		return 4.0026;
    		break;
    	case 'Li':
    		return 6.94;
    		break;
    	case 'Be':
    		return 9.0122;
    		break;
    	case 'B':
    		return 10.81;
    		break;
    	case 'C':
    		return 12.011;
    		break;
    	case 'N':
    		return 14.007;
    		break;
    	case 'O':
    		return 15.999;
    		break;
    	case 'F':
    		return 18.9984;
    		break;
    	case 'Ne':
    		return 20.1797;
    		break;
    	case 'Na':
    		return 22.9897;
    		break;
    	case 'Mg':
    		return 24.305;
    		break;
    	case 'Al':
    		return 26.9815;
    		break;
    	case 'Si':
    		return 28.085;
    		break;
    	case 'P':
    		return 30.9738;
    		break;
    	case 'S':
    		return 32.06;
    		break;
    	case 'Cl':
    		return 35.45;
    		break;
    	case 'Ar':
    		return 39.948;
    		break;
    	case 'K':
    		return 39.098;
    		break;
    	case 'Ca':
    		return 40.078;
    		break;
    	case 'Sc':
    		return 44.956;
    		break;
    	case 'Ti':
    		return 47.867;
    		break;
    	case 'V':
    		return 50.942;
    		break;
    	case 'Cr':
    		return 51.996;
    		break;
    	case 'Mn':
    		return 54.938;
    		break;
    	case 'Fe':
    		return 55.845;
    		break;
    	case 'Co':
    		return 58.933;
    		break;
    	case 'Ni':
    		return 63.546;
    		break;
    	case 'Cu':
    		return 65.38;
    		break;
    	case 'Zn':
    		return 65.38;
    		break;
    	case 'Ga':
    		return 69.723;
    		break;
    	case 'Ge':
    		return 72.630;
    		break;
    	case 'As':
    		return 74.922;
    		break;
    	case 'Se':
    		return 78.971;
    		break;
    	case 'Br':
    		return 79.904;
    		break;
    	case 'Kr':
    		return 83.798;
    		break;
    	case 'Rb':
    		return 85.468;
    		break;
    	case 'Sr':
    		return 87.62;
    		break;
    	case 'Y':
    		return 88.906;
    		break;
    	case 'Zr':
    		return 91.224;
    		break;
    	case 'Nb':
    		return 92.906;
    		break;
    	case 'Mo':
    		return 95.95;
    		break;
    	case 'Tc':
    		return 98;
    		break;
    	case 'Ru':
    		return 101.07;
    		break;
    	case 'Rh':
    		return 102.91;
    		break;
    	case 'Pd':
    		return 106.42;
    		break;
    	case 'Ag':
    		return 107.87;
    		break;
    	case 'Cd':
    		return 112.41;
    		break;
    	case 'In':
    		return 114.82;
    		break;
    	case 'Sn':
    		return 118.71;
    		break;
    	case 'Sb':
    		return 121.76;
    		break;
    	case 'Te':
    		return 127.60;
    		break;
    	case 'I':
    		return 126.90;
    		break;
    	case 'Xe':
    		return 131.29;
    		break;
    	case 'Cs':
    		return 132.91;
    		break;
    	case 'Ba':
    		return 137.33;
    		break;
    	case 'La':
    		return 138.91;
    		break;
    	case 'Ce':
    		return 140.12;
    		break;
    	case 'Pr':
    		return 140.91;
    		break;
    	case 'Nd':
    		return 144.24;
    		break;
    	case 'Pm':
    		return 145;
    		break;
    	case 'Sm':
    		return 150.36;
    		break;
    	case 'Eu':
    		return 151.96;
    		break;
    	case 'Gd':
    		return 157.25;
    		break;
    	case 'Tb':
    		return 158.93;
    		break;
    	case 'Dy':
    		return 162.50;
    		break;
    	case 'Ho':
    		return 164.93;
    		break;
    	case 'Er':
    		return 167.26;
    		break;
    	case 'Tm':
    		return 168.93;
    		break;
    	case 'Yb':
    		return 173.05;
    		break;
    	case 'Lu':
    		return 174.97;
    		break;
    	case 'Hf':
    		return 178.49;
    		break;
    	case 'Ta':
    		return 180.95;
    		break;
    	case 'W':
    		return 183.84;
    		break;
    	case 'Re':
    		return 186.21;
    		break;
    	case 'Os':
    		return 190.23;
    		break;
    	case 'Ir':
    		return 192.22;
    		break;
    	case 'Pt':
    		return 195.08;
    		break;
    	case 'Au':
    		return 196.97;
    		break;
    	case 'Hg':
    		return 200.59;
    		break;
    	case 'Tl':
    		return 204.38;
    		break;
    	case 'Pb':
    		return 207.2;
    		break;
    	case 'Bi':
    		return 208.98;
    		break;
    	case 'Po':
    		return 209;
    		break;
    	case 'At':
    		return 210;
    		break;
    	case 'Rn':
    		return 222;
    		break;
    	case 'Fr':
    		return 223;
    		break;
    	case 'Ra':
    		return 226;
    		break;
    	case 'Ac':
    		return 227;
    		break;
    	case 'Th':
    		return 232.04;
    		break;
    	case 'Pa':
    		return 231.04;
    		break;
    	case 'U':
    		return 238.03;
    		break;
    	case 'Np':
    		return 237;
    		break;
    	case 'Pu':
    		return 244;
    		break;
    	case 'Am':
    		return 243;
    		break;
    	case 'Cm':
    		return 247;
    		break;
    	case 'Bk':
    		return 247;
    		break;
    	case 'Cf':
    		return 251;
    		break;
    	case 'Es':
    		return 252;
    		break;
    	case 'Fm':
    		return 257;
    		break;
    	case 'Md':
    		return 258;
    		break;
    	case 'No':
    		return 259;
    		break;
    	case 'Lr':
    		return 266;
    		break;
    	case 'Rf':
    		return 267;
    		break;
    	case 'Db':
    		return 268;
    		break;
    	case 'Sg':
    		return 269;
    		break;
    	case 'Bh':
    		return 270;
    		break;
    	case 'Hs':
    		return 270;
    		break;
    	case 'Mt':
    		return 278;
    		break;
    	case 'Ds':
    		return 281;
    		break;
    	case 'Rg':
    		return 282;
    		break;
    	case 'Cn':
    		return 285;
    		break;
    	case 'Nh':
    		return 286;
    		break;
    	case 'Fl':
    		return 289;
    		break;
    	case 'Mc':
    		return 290;
    		break;
    	case 'Lv':
    		return 293;
    		break;
    	case 'Ts':
    		return 294;
    		break;
    	case 'Og':
    		return 294;
    		break;

    	default:
    		return false;
    		break;
    }
  }
