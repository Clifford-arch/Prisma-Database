const prisma = require("../utils/prisma");

exports.addition = async (req, res, next) => {
  try {
    const { a, b } = req.query;
    const numA = parseInt(a);
    const numB = parseInt(b);

    if (isNaN(numA) || isNaN(numB)) {
      return res.status(400).json({ error: "Invalid numbers" });
    }

    const sum = numA + numB;
    await prisma.calculation.create({
      data: {
        operation: "addition",
        inputA: numA,
        inputB: numB,
        result: sum.toString(),
      },
    });

    res.json({ sum });
  } catch (error) {
    next(error);
  }
};

exports.factorial = async (req, res, next) => {
  try {
    const { number } = req.params;
    const num = parseInt(number);

    if (isNaN(num) || num < 0) {
      return res.status(400).json({ error: "Invalid number" });
    }

    const factorial = calculateFactorial(num);
    await prisma.calculation.create({
      data: {
        operation: "factorial",
        inputA: num,
        result: factorial.toString(),
      },
    });

    res.json({ factorial });
  } catch (error) {
    next(error);
  }
};

function calculateFactorial(n) {
  if (n === 0) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

exports.fibonacci = async (req, res, next) => {
  try {
    const { count } = req.params;
    const num = parseInt(count);

    if (isNaN(num) || num < 0) {
      return res.status(400).json({ error: "Invalid count" });
    }

    const sequence = generateFibonacci(num);
    await prisma.calculation.create({
      data: {
        operation: "fibonacci",
        inputA: num,
        result: JSON.stringify(sequence),
      },
    });

    res.json({ sequence });
  } catch (error) {
    next(error);
  }
};

function generateFibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence.slice(0, n);
}
